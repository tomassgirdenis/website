function reiķināt() {
  const telqt = document.getElementById("telqt").value;
  const portqt = document.getElementById("portqt").value;
  const tvqt = document.getElementById("tvqt").value;
  const austinqt = document.getElementById("austinqt").value;
  const pelqt = document.getElementById("pelqt").value;
  const diskqt = document.getElementById("diskqt").value;

  const telcen = document.getElementById("Telefons").checked ? parseFloat(document.getElementById("Telefons").value) : 0;
  const portcen = document.getElementById("Portatīvais").checked ? parseFloat(document.getElementById("Portatīvais").value) : 0;
  const tvcen = document.getElementById("smartTV").checked ? parseFloat(document.getElementById("smartTV").value) : 0;
  const austincen = document.getElementById("austinas").checked ? parseFloat(document.getElementById("austinas").value) : 0;
  const pelcen = document.getElementById("pel").checked ? parseFloat(document.getElementById("pel").value) : 0;
  const diskcen = document.getElementById("disk").checked ? parseFloat(document.getElementById("disk").value) : 0;

  const total = (telcen * telqt) + (portcen * portqt) + (tvcen * tvqt) + (austincen * austinqt) + (pelcen * pelqt) + (diskcen * diskqt);

  document.getElementById("total").innerHTML =total.toFixed(2) + "$";
}
