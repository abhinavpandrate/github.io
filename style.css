// --- DATA FOR INTERACTIVE SIMULATORS ---
const workflowData = {
    finance: {
        type: "interactive",
        title: "Finance & Accounting Sync",
        desc: "See how Shopify orders instantly become valid tax invoices in Xero.",
        inputLabel: "INPUT: New Order Total (£)",
        placeholder: "150.00",
        btnText: "[ GENERATE INVOICE ]",
        template: (input) => `
            <div class="xero-card">
                <div style="border-bottom:1px solid #eee; padding-bottom:5px; margin-bottom:10px; display:flex; justify-content:space-between;">
                    <span style="color:#00b7ff; font-weight:bold;">Xero Invoice #INV-2024</span>
                    <span style="color:#0ba934;">PAID</span>
                </div>
                <div style="font-size:12px; color:#555;">
                    <div><strong>To:</strong> Customer via Shopify</div>
                    <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB')}</div>
                    <div style="margin-top:10px; font-size:16px; color:#000;">
                        <strong>Total: £${input}</strong>
                    </div>
                    <div style="margin-top:5px; font-size:10px; color:#999;">VAT (20%): £${(input * 0.2).toFixed(2)} included</div>
                </div>
            </div>
        `
    },
    fulfillment: {
        type: "interactive",
        title: "Smart Fulfillment Routing",
        desc: "Simulate how orders are routed to specific warehouses based on country.",
        inputLabel: "INPUT: Shipping Country",
        placeholder: "France",
        btnText: "[ ROUTE ORDER ]",
        template: (input) => {
            const isUK = input.toLowerCase() === 'uk' || input.toLowerCase() === 'united kingdom';
            const warehouse = isUK ? "MANCHESTER HUB (UK)" : "BERLIN CENTRE (EU)";
            const color = isUK ? "#2c2c2c" : "#0052cc";
            return `
            <div class="shipping-label" style="border: 2px solid ${color};">
                <div style="background:${color}; color:#fff; padding:5px; font-weight:bold; font-size:12px;">
                    SHIPSTATION LABEL CREATED
                </div>
                <div style="padding:10px; text-align:center;">
                    <div style="font-size:24px; font-weight:bold; margin-bottom:5px;">${input.toUpperCase()}</div>
                    <div style="font-size:10px; color:#666;">ROUTED TO:</div>
                    <div style="font-weight:bold;">${warehouse}</div>
                    <div style="margin-top:10px; border-top:1px dashed #ccc; padding-top:5px; font-family:monospace;">
                        ||| |||| || ||||| |||
                    </div>
                </div>
            </div>`;
        }
    },
    ops: {
        type: "interactive",
        title: "VIP & Return Tracking",
        desc: "Type a customer note to see it tagged and logged in Notion.",
        inputLabel: "INPUT: Customer Note",
        placeholder: "Customer is asking for a refund...",
        btnText: "[ SYNC TO NOTION ]",
        template: (input) => `
            <div class="notion-card">
                <div style="font-weight:600; font-size:16px; margin-bottom:5px;">
                    📄 Ticket #8492
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <span class="notion-tag tag-red">🔥 Urgent</span>
                    <span class="notion-tag tag-blue">@Support</span>
                </div>
                <div style="color:#666; font-size:13px;">
                    "${input}"
                </div>
            </div>
        `
    },
    alerts: {
        type: "interactive",
        title: "High-Value Order Alerts",
        desc: "Simulate a high-value order to trigger a team celebration in Slack.",
        inputLabel: "INPUT: Order Value (£)",
        placeholder: "2500",
        btnText: "[ TEST ALERT ]",
        template: (input) => `
            <div class="slack-msg">
                <div style="display:flex; gap:10px;">
                    <div style="width:30px; height:30px; background:#000; border-radius:4px;"></div>
                    <div>
                        <div style="font-weight:bold; font-size:13px;">Shopify Bot <span style="font-weight:normal; color:#888; font-size:10px;">APP</span></div>
                        <div style="font-size:14px; margin-top:2px;">
                            🚨 <strong>BOOM! New High Value Order!</strong> 🚨
                            <br>
                            Value: <span style="background:#d1ffc4; padding:0 4px;">£${input}</span>
                            <br>
                            <i>Drinks are on us! 🍻</i>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

let currentModalType = null;

// --- MODAL FUNCTIONS ---
function openModal(type) {
    const data = workflowData[type];
    if(!data) return;
    
    currentModalType = type; // Store which one is open

    const modalBody = document.getElementById('modal-body-content');
    
    modalBody.innerHTML = `
        <div class="modal-header"><h3>${data.title}</h3></div>
        <div class="modal-body">
            <p>${data.desc}</p>
            <div class="demo-container">
                <label class="demo-label">${data.inputLabel}</label>
                <input type="text" id="demoInput" class="demo-input" placeholder="${data.placeholder}">
                <button class="demo-btn" onclick="runDemo()">${data.btnText}</button>
                <div id="demoResult" class="demo-result"></div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-overlay').classList.add('active');
}

function runDemo() {
    const inputVal = document.getElementById('demoInput').value;
    if(!inputVal) {
        alert("Please enter a value to test the simulator!");
        return;
    }

    const data = workflowData[currentModalType];
    const resultBox = document.getElementById('demoResult');
    
    // Inject the specific HTML template for this workflow
    resultBox.innerHTML = `
        <label class="demo-label" style="margin-top:15px; color:#555;">OUTPUT SIMULATION:</label>
        ${data.template(inputVal)}
    `;
    
    resultBox.style.display = "block";
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    currentModalType = null;
}

// --- COPY EMAIL FUNCTION ---
function copyEmail() {
    navigator.clipboard.writeText("abhinavpandrate@gmail.com");
    const btn = document.querySelector('.copy-email-btn');
    btn.innerText = "[ COPIED! ]";
    setTimeout(() => btn.innerText = "[ Copy Address ]", 2000);
}

// --- SCROLL TO TOP & NAV HIGHLIGHT ---
const scrollTopBtn = document.getElementById("scrollToTop");
const navLinks = {
    home: document.getElementById('nav-home'),
    shopify: document.getElementById('nav-shopify'),
    automation: document.getElementById('nav-automation'),
    contact: document.getElementById('nav-contact')
};

window.addEventListener('scroll', () => {
    // 1. Scroll to Top Visibility
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }

    // 2. Nav Highlight
    let current = '';
    const sections = ['home', 'shopify', 'automation', 'contact'];
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollY >= (element.offsetTop - 300)) {
            current = section;
        }
    });

    Object.values(navLinks).forEach(link => link.classList.remove('active'));
    if (navLinks[current]) navLinks[current].classList.add('active');
});

// --- LIVE UK TIME ---
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false });
    const timeEl = document.getElementById('uk-time');
    if(timeEl) timeEl.innerText = timeString + " GMT";
}
setInterval(updateTime, 1000);
updateTime();

// --- KONAMI CODE ---
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert("★ SECRET UNLOCKED: GOD MODE ACTIVATED ★");
            const spinInterval = setInterval(() => {
                wireframe.rotation.x += 0.1;
                wireframe.rotation.y += 0.1;
                wireframe.scale.x = Math.sin(Date.now() / 100) * 2;
            }, 16);
            document.body.style.filter = "invert(1) hue-rotate(180deg)";
            setTimeout(() => {
                clearInterval(spinInterval);
                document.body.style.filter = "";
                wireframe.scale.set(1, 1, 1);
                alert("System Restored.");
            }, 5000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

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
