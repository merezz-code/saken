import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js/auto";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = React.useRef<Chart | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Données utilisées partout
  const signalements = [
    {
      type: "Propreté",
      lat: 33.5731,
      lng: -7.5898,
      date: "2025-06-01",
      titre: "Poubelle débordante",
      description: "Les ordures ne sont pas ramassées depuis 3 jours.",
      priorite: "Élevée",
    },
    {
      type: "Voirie",
      lat: 33.5796,
      lng: -7.6039,
      date: "2025-06-02",
      titre: "Nid-de-poule dangereux",
      description: "Un grand trou sur la chaussée proche de l’école.",
      priorite: "Moyenne",
    },
    {
      type: "Éclairage",
      lat: 33.5756,
      lng: -7.5978,
      date: "2025-06-03",
      titre: "Lampe de rue cassée",
      description: "Quartier plongé dans le noir.",
      priorite: "Élevée",
    },
    {
      type: "Sécurité",
      lat: 33.5702,
      lng: -7.6015,
      date: "2025-06-04",
      titre: "Attroupement suspect",
      description: "Des personnes rôdent autour des commerces fermés.",
      priorite: "Faible",
    },
  ];

  // Effet pour stats
  useEffect(() => {
    const stats: Record<string, number> = {};
    signalements.forEach((s) => {
      stats[s.type] = (stats[s.type] || 0) + 1;
    });

    const statsList = document.getElementById("statsList");
    if (statsList) {
      statsList.innerHTML = "";
      for (const [type, count] of Object.entries(stats)) {
        const li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = type;
        const span = document.createElement("span");
        span.className = "badge bg-success rounded-pill";
        span.textContent = count.toString();
        li.appendChild(span);
        statsList.appendChild(li);
      }
    }
  }, [signalements]);

  // Effet pour Chart.js
  useEffect(() => {
    const countsByDate: Record<string, number> = {};
    signalements.forEach((s) => {
      countsByDate[s.date] = (countsByDate[s.date] || 0) + 1;
    });

    const dates = Object.keys(countsByDate).sort();
    const counts = dates.map((date) => countsByDate[date]);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Signalements",
              data: counts,
              borderColor: "#198754",
              backgroundColor: "#198754",
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            zoom: { enabled: false },
          },
          scales: { y: { beginAtZero: true, precision: 0 } },
        },
      });
    }

    // Empêcher zoom molette sur le canvas
    const canvas = chartRef.current;
    if (canvas) {
      const preventZoom = (e: WheelEvent) => e.preventDefault();
      canvas.addEventListener("wheel", preventZoom, { passive: false });
      return () => {
        canvas.removeEventListener("wheel", preventZoom);
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [signalements]);

  // Effet pour initialiser la carte Leaflet (MapTest intégré)
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }

    mapRef.current = L.map("map").setView([33.5731, -7.5898], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(mapRef.current);

    signalements.forEach((s) => {
      const marker = L.marker([s.lat, s.lng]).addTo(mapRef.current!);
      marker.bindPopup(`<b>Type:</b> ${s.type}<br><b>Date:</b> ${s.date}`);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [signalements]);

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
        <div className="container-fluid">
          <a className="navbar-brand text-success fw-bold" href="#">
            <img
              src="https://img.icons8.com/fluency/48/000000/police-badge.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            Saken Alert - Dashboard
          </a>
          <div className="d-flex align-items-center">
            <span className="me-3 text-secondary">Admin</span>
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=198754&color=fff&size=32"
              alt="Profil"
              className="rounded-circle"
              width="32"
              height="32"
            />
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="mb-4 text-success">Dashboard des Signalements</h1>

        {/* Statistiques */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex">
            <div className="card shadow-sm w-100">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Nombre de signalements par type</h5>
              </div>
              <div className="card-body">
                <ul id="statsList" className="list-group"></ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex">
            <div className="card shadow-sm w-100">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Tendances des signalements</h5>
              </div>
              <div className="card-body d-flex align-items-center justify-content-center">
                <canvas id="trendChart" ref={chartRef} height={150}></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau */}
        <div className="mb-4">
          <h2 className="text-success mb-3">Tableau des Réclamations</h2>
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Priorité</th>
              </tr>
            </thead>
            <tbody>
              {signalements.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.titre}</td>
                  <td>{item.description}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        item.priorite === "Élevée"
                          ? "danger"
                          : item.priorite === "Moyenne"
                          ? "warning"
                          : "success"
                      }`}
                    >
                      {item.priorite}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Carte Leaflet */}
        <div className="card shadow-sm">
          <div className="card-header bg-success text-white">
            <h5 className="card-title mb-0">Carte des signalements</h5>
          </div>
          <div className="card-body p-0" style={{ height: "400px" }}>
            <div
              id="map"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "0 0 8px 8px",
                overflow: "hidden",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
