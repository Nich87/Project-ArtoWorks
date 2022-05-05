const make = (datas) => {
    const data = datas.map((data) => record.join(',')).join('\r\n');
    const bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const blob = new Blob([bom, data], { type: 'text/csv' });
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", "out.csv");
    document.body.appendChild(link);
    link.click();
}

module.exports = make;
