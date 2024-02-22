const reg = /(\d*)\.img(\d*)/;

function sortPhotos(pics){
    const sorted = pics.sort(compare).splice(-5);
    const last = sorted[sorted.length -1];
    sorted.push(last.replace(reg, (match, p1, p2) => `${p1}.img${(parseInt(p2) + 1)}`));
    return sorted;
}

function compare(a, b) {
    const regA = reg.exec(a);
    const regB = reg.exec(b);
    console.log(regA, regB)
    const year = parseInt(regA[1]) - parseInt(regB[1]);
    if (year === 0) {
        return parseInt(regA[2]) - parseInt(regB[2]);
    }
    return year;
}

sortPhotos(["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5"])
// ["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]

// sortPhotos(["2016.img4","2016.img5","2016.img1","2016.img3","2016.img2"])
// ["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]

// sortPhotos(["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5"])
// ["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5","2016.img6"]

// sortPhotos(["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img4","2013.img5"])
// ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

// sortPhotos(["2016.img7","2016.img2","2016.img3","2015.img3","2012.img8","2016.img4","2016.img5"])
// ["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]

// sortPhotos([
//     '2011.img3',
//     '2009.img5',
//     '2010.img8',
//     '2012.img6',
//     '2012.img12',
//     '2013.img2',
//     '2012.img2',
//     '2013.img20',
//     '2014.img9',
//     '2013.img8',
//     '2011.img18',
//     '2011.img2', '2016.img15', '2013.img16', '2014.img18', '2010.img20', '2010.img5', '2015.img16', '2013.img13', '2009.img4'])
