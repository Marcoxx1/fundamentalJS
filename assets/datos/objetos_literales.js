


let invoice = {
    number: 1,
    client: "LIVINGLAB",
    currency: "USD",
    Coords: {
        lat: 42.0,
        long: -108.61
    },
    services: ["LAPTOP","COFFE","GAS","INTERNET"],
    location: {
        cp: 31100, address: "Av. Américas"
    },
    subtotal: 500,
    IVA: 80
}
document.writeln(invoice.client);
document.writeln("<br>");
document.writeln(invoice["client"]);
document.writeln("<br>");
document.writeln(invoice.Coords.lat);
document.writeln("<br>");
document.writeln(invoice.services[1]);
document.writeln("<br>");
document.writeln(invoice.services[invoice.services.length-1]);
document.writeln("<br>");

//
delete invoice.IVA
