import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kas ir prasības programēšanā? Prasības programēšanā ir skaidras un
          konkrētas lietotāja vai sistēmas vajadzības, kas nosaka, ko programmai
          vai sistēmai ir jādara. Tās definē: Programmatūras funkcionalitāti (ko
          tā dara). Sistēmas darbības kritērijus (kā tai jāstrādā).
          Ierobežojumus vai noteikumus (piemēram, veiktspējas vai drošības
          prasības). Prasības parasti iedalās: Funkcionālās prasības – Ko
          sistēmai jāveic (piem., lietotājs var pieteikties, pievienot produktu
          grozam). Nefunkcionālās prasības – Kā sistēmai jāveic tās funkcijas
          (piem., sistēmai jābūt pieejamai 99.9% laika, atbildes laiks nedrīkst
          pārsniegt 2 sekundes). Kas ir prasību specifikācija? Prasību
          specifikācija ir dokumentācija, kurā detalizēti aprakstītas visas
          prasības attiecībā uz izstrādājamo sistēmu vai programmatūru. Tā kalpo
          kā vadlīnijas gan izstrādātājiem, gan testētājiem, un var ietvert:
          Sistēmas pārskatu un mērķus. Funkcionālo un nefunkcionālo prasību
          detalizētu aprakstu. Lietotāja stāstus (user stories) vai lietošanas
          scenārijus (use cases). Sistēmas ierobežojumus un ārējās integrācijas
          prasības. Tipiski prasību specifikācijas dokumenta veidi: SRS
          (Software Requirements Specification) – Standarta dokumenta forma,
          kurā aprakstīta programmatūras prasību analīze. BRD (Business
          Requirements Document) – Fokusējas uz biznesa vajadzībām un augsta
          līmeņa mērķiem. FRD (Functional Requirements Document) – Padziļināts
          funkcionālo prasību apraksts. Ar ko atšķiras prasības un prasību
          specifikācija? Prasības Prasību specifikācija Individuālas prasības,
          kas izsaka konkrētas lietotāja vai sistēmas vajadzības. Dokuments, kas
          apkopo visas prasības strukturētā un pārskatāmā formātā. Piemērs:
          "Lietotājam ir iespēja pieteikties ar e-pastu un paroli." SRS
          dokuments, kur aprakstīts, kā pieteikšanās funkcija darbojas, kādi ir
          drošības kritēriji utt. Var būt vārdiski izteiktas vai sākotnēji
          neskaidras. Ir formālas un strukturētas, ar detalizētām specifikācijām
          un diagrammām. Fokuss uz vienu funkciju vai sistēmas aspektu. Fokuss
          uz visu sistēmas prasību aprakstīšanu. Primāri lietotāju vai biznesa
          vajadzības. Ietver arī tehniskās prasības, ierobežojumus un testēšanas
          kritērijus. Kāpēc tās ir būtiskas? Prasības: Palīdz noteikt, ko tieši
          lietotājs vai klients vēlas. Prasību specifikācija: Nodrošina skaidru
          saziņu starp visām projekta iesaistītajām pusēm (biznesa analītiķiem,
          izstrādātājiem, testētājiem), lai izvairītos no neskaidrībām un
          pārpratumiem.
        </p>
      </header>
    </div>
  );
}

export default App;
