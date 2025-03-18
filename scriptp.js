document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll("#pieces1 .piece");
    const slots = document.querySelectorAll("#puzzle1 .slot");
    const piecesContainer = document.querySelector("#pieces1");

    const shufflePositions = () => {
        const positions = [...pieces];
        positions.sort(() => Math.random() - 0.5);
        positions.forEach(piece => piecesContainer.appendChild(piece));
    };

    shufflePositions();

    let draggedPiece = null;

    pieces.forEach(piece => {
        piece.addEventListener("dragstart", (e) => {
            draggedPiece = e.target;
            e.dataTransfer.setData("text/plain", draggedPiece.dataset.piece);
            setTimeout(() => (draggedPiece.style.opacity = "0.5"), 0);
        });

        piece.addEventListener("dragend", () => {
            setTimeout(() => (draggedPiece.style.opacity = "1"), 0);
        });
    });

    slots.forEach(slot => {
        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        slot.addEventListener("drop", (e) => {
            e.preventDefault();
            const pieceNumber = e.dataTransfer.getData("text/plain");

            if (slot.children.length === 0) {
                const piece = document.querySelector(`.piece[data-piece="${pieceNumber}"]`);
                slot.appendChild(piece);
                piece.style.width = "100%";
                piece.style.height = "100%";
            }

            checkCompletion();
        });
    });

    const checkCompletion = () => {
        const placedPieces = document.querySelectorAll(".slot .piece");

        if (placedPieces.length === 4) {
            let correct = true;

            slots.forEach(slot => {
                const placedPiece = slot.querySelector(".piece");
                if (!placedPiece || placedPiece.dataset.piece !== slot.dataset.slot) {
                    correct = false;
                }
            });

            if (correct) {
                window.location.href = "https://karasuxyz.github.io/test/";
            } else {
                setTimeout(() => {
                    alert("Źle ułożonaś, już blisko jesteś...");
                    resetGame();
                }, 300);
            }
        }
    };

    const resetGame = () => {
        slots.forEach(slot => {
            if (slot.firstChild) {
                const piece = slot.firstChild;
                piecesContainer.appendChild(piece);

                piece.style.width = "100px";
                piece.style.height = "100px";
            }
        });

        shufflePositions();
    };
});