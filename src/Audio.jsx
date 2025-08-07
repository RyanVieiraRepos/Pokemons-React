import { useEffect } from "react";

function Audio() {
  useEffect(() => {
    const audio = document.getElementById("audio");

    const startAudio = () => {
      if (audio) {
        audio.play().catch((err) => {
          console.error("Erro ao reproduzir o áudio:", err);
        });
      }
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
    };
  }, []);

  return (
    <>
      <audio id="audio" loop>
        <source src="abertura.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}

export default Audio;