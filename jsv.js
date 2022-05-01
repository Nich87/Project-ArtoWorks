const cls = document.getElementsByClassName('wb-break-all');
const els = [...cls];
const titles = [];
const urls = [];
const data = [titles, urls];
const res = [];

const main = () => {
    for (title of els) titles.push(title.outerText.split(' ')[0]);
    for (url of els) urls.push(url.firstElementChild.href);
    for (let i = 0; i < data[0].length; i++) res[i] = data[0][i] + "," + data[1][i];
}

const create = () => {
    const csv = "data:text/csv;charset=utf-8," + res.join("\n");

    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", "out.csv");
    document.body.appendChild(link);
    link.click();
}
main();
create();
