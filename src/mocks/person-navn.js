const fornavn = ["Julian", "Geir", "Michael", "Sergio", "Tormod"];
const etternavn = ["Navnesen", "Navresen", "Nasreven", "Navensen", "Navesen", "Narvesen"];

function getNavn() {
  const navn = fornavn[~~(fornavn.length * Math.random())] + " " + etternavn[~~(etternavn.length * Math.random())];
  return { navn };
}

export default getNavn;
