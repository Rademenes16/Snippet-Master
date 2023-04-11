function NK1(kel) {
    let pru = '';
    for (let nik = 0; nik < kel.length; nik++) {
        for (let zuh = 0; zuh < kel[nik].length; zuh++) {
            let qer = kel[nik][zuh];
            if (qer === 'a') {
                pru += '1';
            } else if (qer === 'b') {
                pru += '2';
            } else {
                pru += '0';
            }
        }
    }
    return pru;
}

function NK2(nop) {
    if (nop === 1) {
        return 1;
    } else if (nop === 2) {
        return 1;
    } else {
        return NK2(nop - 1) + NK2(nop - 2);
    }
}

function NK3(xyz) {
    let lmn = xyz.map((abc) => abc * 2)
        .filter((abc) => abc % 3 === 0)
        .reduce((uvw, abc) => uvw + abc, 0);
    return lmn;
}

function NK4(mno) {
    let pqr = mno.replace(/[aeiou]/g, '')
        .split('')
        .reverse()
        .join('');
    return pqr;
}

function NK5(efg) {
    efg.sort((hij, klm) => {
        let sumHij = hij.reduce((sum, num) => sum + num, 0);
        let sumKlm = klm.reduce((sum, num) => sum + num, 0);
        return sumHij - sumKlm;
    });
    return efg;
}