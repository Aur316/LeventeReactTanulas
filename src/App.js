import { useState } from "react";
import "./App.css";

function App() {
  const [szam, setSzam] = useState(49);
  const [mutasd, setMutasd] = useState(false);

  const szamhozAdjHozza = () => {
    setSzam(szam + 1);
  };
  const szambolVonjKi = () => {
    setSzam(szam - 1);
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <div id="gombok2" className="flex flex-col w-[200px] gap-5 p-3">
        <button className="btn btn-primary" onClick={() => szamhozAdjHozza()}>
          +
        </button>
        <button className="btn btn-primary" onClick={() => setMutasd(!mutasd)}>
          {!mutasd ? "Mutasd meg a szöveget" : "rejtsd el a szöveget"}
        </button>
        <p>{szam}</p>
        {szam === 50 ? <p>Bazdmeg ez 50</p> : <p>Lofaszt 50</p>}
        {mutasd === true && <p>ez egy szöveg</p>}
        <button className="btn btn-primary" onClick={() => szambolVonjKi()}>
          -
        </button>
      </div>

      {/* <body>
        <div id="share">
          <EmailShareButton url={shareLink}>
            <EmailIcon size={62} round={true} />
          </EmailShareButton>
          <br />
          <FacebookShareButton url={shareLink}>
            <FacebookIcon size={62} round={true} />
          </FacebookShareButton>
          <br />
          <TwitterShareButton url={shareLink}>
            <TwitterIcon size={62} round={true} />
          </TwitterShareButton>
        </div>

        <div id="parent">
          <div id="gombok">
            <a
              class="bn39"
              href="https://www.youtube.com/@Usc_FC"
              target="_blank"
            >
              <span class="bn39span">Usc FC</span>
            </a>
            <br />
            <button className="btn btn-primary">Kattints rám</button>

            <a
              class="bn39"
              href="https://youtube.com/@Usc_official"
              target="_blank"
            >
              <span class="bn39span">Usc Extra</span>
            </a>
            <br />

            <a class="bn39" href="/">
              <span class="bn39span">Discord</span>
            </a>
            <br />
            <a
              class="bn39"
              href="https://buymeacoffee.com/usclevente"
              target="_blank"
            >
              <span class="bn39span">Támogatás</span>
            </a>
          </div>
          <div id="logoParent">
            <a href="https://www.youtube.com/@Usc_FC" target="_blank">
              <img
                id="logo"
                src="data:image/jpeg;base64,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"
              />
            </a>
          </div>
        </div>
      </body> */}
    </div>
  );
}

export default App;
