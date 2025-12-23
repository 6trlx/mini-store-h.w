function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "ahmed" && pass === "1234") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Invalid username or password";
    }
}

let products = [
    { id:1,  name:"Laptop", desc:"High performance laptop suitable for study and programming.", img:"p1.jpg" },
    { id:2,  name:"Smartphone", desc:"Modern smartphone with high-resolution screen and strong camera.", img:"p2.jpg" },
    { id:3,  name:"Headphones", desc:"Comfortable headphones with noise cancellation.", img:"p3.jpg" },
    { id:4,  name:"Wireless Mouse", desc:"Easy-to-use wireless mouse for office and study.", img:"p4.jpg" },
    { id:5,  name:"Keyboard", desc:"Fast response keyboard suitable for typing and coding.", img:"p5.jpg" },
    { id:6,  name:"Monitor", desc:"24-inch Full HD monitor, comfortable for long use.", img:"p6.jpg" },
    { id:7,  name:"USB Flash Drive", desc:"Large storage USB flash drive for easy file transfer.", img:"p7.jpg" },
    { id:8,  name:"External Hard Drive", desc:"External hard drive for backups and important files.", img:"p8.jpg" },
    { id:9,  name:"Smart Watch", desc:"Smart watch for tracking activity and daily notifications.", img:"p9.jpg" },
    { id:10, name:"Bluetooth Speaker", desc:"Portable speaker with clear sound quality.", img:"p10.jpg" },
    { id:11, name:"Digital Camera", desc:"Digital camera for high-quality photos and videos.", img:"p11.jpg" },
    { id:12, name:"Power Bank", desc:"Portable charger for charging devices anywhere.", img:"p12.jpg" },
    { id:13, name:"Laptop Bag", desc:"Protective bag designed for laptops.", img:"p13.jpg" },
    { id:14, name:"Printer", desc:"Multi-purpose printer for home and study use.", img:"p14.jpg" },
    { id:15, name:"Mouse Pad", desc:"Smooth mouse pad for better control.", img:"p15.jpg" },
    { id:16, name:"WiFi Router", desc:"Router providing stable and fast internet connection.", img:"p16.jpg" },
    { id:17, name:"Bluetooth Earbuds", desc:"Small and portable earbuds for daily use.", img:"p17.jpg" },
    { id:18, name:"Microphone", desc:"Clear sound microphone for meetings and recording.", img:"p18.jpg" },
    { id:19, name:"Charging Cable", desc:"Durable fast charging cable for devices.", img:"p19.jpg" },
    { id:20, name:"Desk Organizer", desc:"Organizer to keep desk tools tidy.", img:"p20.jpg" },
    { id:21, name:"Scientific Calculator", desc:"Scientific calculator for university students.", img:"p21.jpg" },
    { id:22, name:"Projector", desc:"Projector for presentations and video display.", img:"p22.jpg" },
    { id:23, name:"Laptop Cooler", desc:"Cooling pad to reduce laptop temperature.", img:"p23.jpg" },
    { id:24, name:"Card Reader", desc:"Device to read memory cards easily.", img:"p24.jpg" },
    { id:25, name:"Desk Lamp", desc:"Desk lamp with comfortable lighting for study.", img:"p25.jpg" }
];

let productList = document.getElementById("productList");

if (productList) {
    displayProducts(products);
}

function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="images/${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
        `;
        div.onclick = () => openModal(p);
        productList.appendChild(div);
    });
}

function searchProduct() {
    let value = document.getElementById("search").value.toLowerCase();
    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
}

function openModal(product) {
    document.getElementById("productModal").style.display = "block";
    document.getElementById("modalTitle").innerText = product.name;
    document.getElementById("modalDesc").innerText = product.desc;
    document.getElementById("modalImg").src = `images/${product.img}`;
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}
