console.log("Câu 7: almost In creasing Sequence - Hầu hết trong nối tiếp không đều")

// function almostIncreasingSequence(sequence: number[]): boolean {

// }

function almostIncreasingSequence(seq) {
    if (seq.length) return true;
    let count = 0;

    for (let i = 0; i < seq.length - 1; i++) {
        if (seq[i] >= seq[i + 1]) {
            if (seq[i] >= seq[i + 2]) {
                seq.splice(i, 1);
            } else {
                seq.splice(i + 1, 1);
            }
            count++;
            i -= 2;

            if (count >= 2) return false;

        }
    }
    return true;
}