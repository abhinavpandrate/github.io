// --- DATA FOR MODALS ---
const workflowData = {
    finance: {
        title: "Finance & Accounting Sync",
        desc: "Stop manually entering data. This automation ensures your books are always 100% accurate.",
        steps: [
            "Trigger: New Order Created in Shopify",
            "Logic: Check if order is Paid & Unfulfilled",
            "Action: Create/Update Invoice in Xero",
            "Action: Email Accountant (Optional)"
        ]
    },
    fulfillment: {
        title: "Smart Fulfillment Routing",
        desc: "Route orders to different warehouses based on customer location or product tag.",
        steps: [
            "Trigger: New Order",
            "Logic: If tag contains 'East-Coast'",
            "Action: Send to NY Warehouse (ShipStation)",
            "Else: Send to LA Warehouse"
        ]
    },
    ops: {
        title: "VIP & Return Tracking",
        desc: "Keep your support team in the loop without giving them Shopify Admin access.",
        steps: [
            "Trigger: Order Refunded or Tagged 'VIP'",
            "Action: Create Database Item in Notion",
            "Action: Assign task to Support Agent"
        ]
    },
    alerts: {
        title: "High-Value Order Alerts",
        desc: "Celebrate wins and alert the team instantly when big orders come in.",
        steps: [
            "Trigger: New Order",
            "Logic: If Total > $1,000",
            "Action: Send message to #sales-wins Slack channel",
            "Action: Play sound effect (optional)"
        ]
    }
};

// --- MODAL FUNCTIONS ---
function openModal(type) {
    const data = workflowData[type];
    if(!data) return;

    const modalBody = document.getElementById('modal-body-content');
    
    // Build HTML
    let stepsHtml = data.steps.map(step => `<div class="workflow-step">${step}</div>`).join('');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h3>${data.title}</h3>
        </div>
        <div class="modal-body">
            <p>${data.desc}</p>
            <br>
            <strong>HOW IT WORKS:</strong>
            <br><br>
            ${stepsHtml}
        </div>
    `;
    
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// --- COPY EMAIL FUNCTION ---
function copyEmail() {
    navigator.clipboard.writeText("your@email.com");
    const btn = document.querySelector('.copy-email-btn');
    btn.innerText = "[ COPIED! ]";
    setTimeout(() => btn.innerText = "[ Copy Address ]", 2000);
}

// --- THREE.JS SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.45), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight * 0.45);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(2.3, 0);
const edges = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({ color: 0x2c2c2c, linewidth: 2 });
const wireframe = new THREE.LineSegments(edges, material);
scene.add(wireframe);

camera.position.z = 5;

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
    requestAnimationFrame(animate);
    wireframe.rotation.x += 0.003 + (mouseY * 0.005);
    wireframe.rotation.y += 0.003 + (mouseX * 0.005);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    const height = window.innerHeight * 0.45;
    camera.aspect = window.innerWidth / height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, height);
});
