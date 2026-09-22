
// Mobile navigation
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const siteNav = document.querySelector(".site-nav");
const servicesDropdown = document.querySelector(".nav-dropdown");

if (mobileMenuToggle && siteNav) {
  mobileMenuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("mobile-open");
    mobileMenuToggle.classList.toggle("is-open", open);
    mobileMenuToggle.setAttribute("aria-expanded", String(open));
    mobileMenuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
}

if (servicesDropdown) {
  const servicesLink = servicesDropdown.querySelector(".services-link");
  if (servicesLink) {
    servicesLink.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        event.preventDefault();
        servicesDropdown.classList.toggle("services-open");
      }
    });
  }
}

document.querySelectorAll(".site-nav a:not(.services-link)").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 768px)").matches && siteNav && mobileMenuToggle) {
      siteNav.classList.remove("mobile-open");
      mobileMenuToggle.classList.remove("is-open");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
});

const contactForm = document.querySelector(".contact-form");
const ticketForm = document.querySelector("[data-ticket-form]");
const loginModal = document.querySelector("[data-login-modal]");
const registerModal = document.querySelector("[data-register-modal]");
const ticketModal = document.querySelector("[data-ticket-modal]");
const successModal = document.querySelector("[data-success-modal]");
const formStatus = document.querySelector("[data-form-status]");
const ticketStatus = document.querySelector("[data-ticket-status]");
const serviceTabs = document.querySelectorAll("[data-service-tab]");
const servicePanels = document.querySelectorAll("[data-service-panel]");
const languageSelect = document.querySelector("[data-language-select]");

const translations = {
  kn: {
    "Select City": "ನಗರ ಆಯ್ಕೆಮಾಡಿ",
    "Professional firm for": "ವೃತ್ತಿಪರ ಸಂಸ್ಥೆ",
    "tax | audit | advisory": "ತೆರಿಗೆ | ಆಡಿಟ್ | ಸಲಹೆ",
    "ABOUT US": "ನಮ್ಮ ಬಗ್ಗೆ",
    "SERVICES": "ಸೇವೆಗಳು",
    "CONTACT US": "ಸಂಪರ್ಕಿಸಿ",
    Call: "ಕರೆ",
    Mail: "ಮೇಲ್",
    Payment: "ಪಾವತಿ",
    "Client login": "ಕ್ಲೈಂಟ್ ಲಾಗಿನ್",
    "Amaresh Consultancy": "ಅಮರೇಶ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ",
    "chartered accountants": "ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್ಸ್",
    "Taxation, audit, accounting, compliance": "ತೆರಿಗೆ, ಆಡಿಟ್, ಅಕೌಂಟಿಂಗ್, ಅನುಸರಣೆ",
    "Income Tax": "ಆದಾಯ ತೆರಿಗೆ",
    "Consultancy, tax audit, advisory": "ಸಲಹೆ, ತೆರಿಗೆ ಆಡಿಟ್, ಮಾರ್ಗದರ್ಶನ",
    GST: "ಜಿಎಸ್‌ಟಿ",
    "Registration, returns, reconciliation": "ನೋಂದಣಿ, ರಿಟರ್ನ್ಸ್, ಹೊಂದಾಣಿಕೆ",
    "Audit Support": "ಆಡಿಟ್ ಬೆಂಬಲ",
    "Statutory, internal, and compliance": "ಕಾನೂನುಬದ್ಧ, ಆಂತರಿಕ, ಅನುಸರಣೆ",
    Services: "ಸೇವೆಗಳು",
    "Services planned around the way clients actually need CA support.":
      "ಕ್ಲೈಂಟ್‌ಗಳಿಗೆ ಅಗತ್ಯವಿರುವ CA ಬೆಂಬಲದಂತೆ ರೂಪಿಸಿದ ಸೇವೆಗಳು.",
    Auditing: "ಆಡಿಟಿಂಗ್",
    "Transfer Pricing": "ಟ್ರಾನ್ಸ್‌ಫರ್ ಪ್ರೈಸಿಂಗ್",
    "Start Up": "ಸ್ಟಾರ್ಟ್ ಅಪ್",
    Outsourcing: "ಔಟ್‌ಸೋರ್ಸಿಂಗ್",
    Advisory: "ಸಲಹೆ",
    "Management Consulting": "ಮ್ಯಾನೇಜ್ಮೆಂಟ್ ಕನ್ಸಲ್ಟಿಂಗ್",
    "Statutory Audit": "ಸ್ಟ್ಯಾಚ್ಯುಟರಿ ಆಡಿಟ್",
    "Internal Audit": "ಇಂಟರ್ನಲ್ ಆಡಿಟ್",
    "IND AS": "IND AS",
    "Public Sector Audit": "ಪಬ್ಲಿಕ್ ಸೆಕ್ಟರ್ ಆಡಿಟ್",
    "Company Secretarial Services": "ಕಂಪನಿ ಸೆಕ್ರೆಟೇರಿಯಲ್ ಸೇವೆಗಳು",
    "Transfer pricing documentation": "ಟ್ರಾನ್ಸ್‌ಫರ್ ಪ್ರೈಸಿಂಗ್ ದಾಖಲೆಗಳು",
    "International transaction review": "ಅಂತರರಾಷ್ಟ್ರೀಯ ವ್ಯವಹಾರ ಪರಿಶೀಲನೆ",
    "Compliance support": "ಅನುಸರಣೆ ಬೆಂಬಲ",
    "GST Registration": "ಜಿಎಸ್‌ಟಿ ನೋಂದಣಿ",
    "GST Audit": "ಜಿಎಸ್‌ಟಿ ಆಡಿಟ್",
    "GST Services": "ಜಿಎಸ್‌ಟಿ ಸೇವೆಗಳು",
    "Tax Consulting Services": "ತೆರಿಗೆ ಸಲಹಾ ಸೇವೆಗಳು",
    "Tax Audit": "ತೆರಿಗೆ ಆಡಿಟ್",
    "Income Tax Advisory": "ಆದಾಯ ತೆರಿಗೆ ಸಲಹೆ",
    "NRI Taxation": "NRI ತೆರಿಗೆ",
    "Easy IT Filing": "ಸುಲಭ IT ಫೈಲಿಂಗ್",
    "Startup Registration Process": "ಸ್ಟಾರ್ಟ್‌ಅಪ್ ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆ",
    "Setting Up New Business": "ಹೊಸ ವ್ಯವಹಾರ ಸ್ಥಾಪನೆ",
    "Startup Funding": "ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಫಂಡಿಂಗ್",
    Proprietorship: "ಪ್ರೊಪ್ರೈಟರ್‌ಶಿಪ್",
    Partnership: "ಪಾರ್ಟ್ನರ್‌ಶಿಪ್",
    "Limited Liability Partnership": "ಲಿಮಿಟೆಡ್ ಲೈಬಿಲಿಟಿ ಪಾರ್ಟ್ನರ್‌ಶಿಪ್",
    Trust: "ಟ್ರಸ್ಟ್",
    Society: "ಸೊಸೈಟಿ",
    "Private Limited Company": "ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಂಪನಿ",
    "Accounting outsourcing": "ಅಕೌಂಟಿಂಗ್ ಔಟ್‌ಸೋರ್ಸಿಂಗ್",
    "Compliance outsourcing": "ಅನುಸರಣೆ ಔಟ್‌ಸೋರ್ಸಿಂಗ್",
    "Payroll and records support": "ಪೇರೋಲ್ ಮತ್ತು ದಾಖಲೆ ಬೆಂಬಲ",
    "Financial advisory": "ಹಣಕಾಸು ಸಲಹೆ",
    "Business advisory": "ವ್ಯವಹಾರ ಸಲಹೆ",
    "Compliance advisory": "ಅನುಸರಣೆ ಸಲಹೆ",
    "Joint Development Agreement": "ಜಾಯಿಂಟ್ ಡೆವಲಪ್ಮೆಂಟ್ ಅಗ್ರಿಮೆಂಟ್",
    "Labour Law Consultancy": "ಕಾರ್ಮಿಕ ಕಾನೂನು ಸಲಹೆ",
    "Energy Sector Services": "ಎನರ್ಜಿ ಸೆಕ್ಟರ್ ಸೇವೆಗಳು",
    "Fixed Asset Verification": "ಸ್ಥಿರ ಆಸ್ತಿ ಪರಿಶೀಲನೆ",
    "Why clients choose us": "ಕ್ಲೈಂಟ್‌ಗಳು ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸುತ್ತಾರೆ",
    "Reliable CA services with attention to detail and practical business sense.":
      "ವಿವರಗಳಿಗೆ ಗಮನ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ವ್ಯವಹಾರ ಜ್ಞಾನ ಹೊಂದಿದ ವಿಶ್ವಾಸಾರ್ಹ CA ಸೇವೆಗಳು.",
    Responsive: "ವೇಗವಾದ ಪ್ರತಿಕ್ರಿಯೆ",
    Organized: "ಸಂಘಟಿತ",
    Clear: "ಸ್ಪಷ್ಟ",
    "Our Team": "ನಮ್ಮ ತಂಡ",
    "Meet the founder behind Amaresh Consultancy.": "ಅಮರೇಶ್ ಕನ್ಸಲ್ಟೆನ್ಸಿಯ ಸಂಸ್ಥಾಪಕರನ್ನು ಭೇಟಿಯಾಗಿರಿ.",
    Founder: "ಸ್ಥಾಪಕರು",
    "Chartered Accountant": "ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್",
    "Contact Us": "ಸಂಪರ್ಕಿಸಿ",
    "Send an enquiry and start with a consultation.": "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ ಮತ್ತು ಸಲಹೆಯಿಂದ ಆರಂಭಿಸಿ.",
    Phone: "ಫೋನ್",
    Email: "ಇಮೇಲ್",
    Office: "ಕಚೇರಿ",
    Name: "ಹೆಸರು",
    "Your name": "ನಿಮ್ಮ ಹೆಸರು",
    "Service needed": "ಅಗತ್ಯವಿರುವ ಸೇವೆ",
    Message: "ಸಂದೇಶ",
    "Tell us what you need help with": "ನಿಮಗೆ ಬೇಕಾದ ಸಹಾಯವನ್ನು ಬರೆಯಿರಿ",
    "Send enquiry": "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
    "Head Office": "ಮುಖ್ಯ ಕಚೇರಿ",
    "Open map": "ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ",
    "Our Business Hours": "ನಮ್ಮ ಕೆಲಸದ ಸಮಯ",
    "Monday to Saturday": "ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ",
    "Follow Us On": "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    "New client register": "ಹೊಸ ಕ್ಲೈಂಟ್ ನೋಂದಣಿ",
    "Client Access": "ಕ್ಲೈಂಟ್ ಪ್ರವೇಶ",
    Login: "ಲಾಗಿನ್",
    Continue: "ಮುಂದುವರಿಸಿ",
    "New Client": "ಹೊಸ ಕ್ಲೈಂಟ್",
    Register: "ನೋಂದಣಿ",
    "Mobile number": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "Service required": "ಅಗತ್ಯವಿರುವ ಸೇವೆ",
    "Submit request": "ವಿನಂತಿ ಕಳುಹಿಸಿ",
    "Thank you": "ಧನ್ಯವಾದಗಳು",
    "We will get back to you soon.": "ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    "Your enquiry has been sent to Amaresh Consultancy.":
      "ನಿಮ್ಮ ವಿಚಾರಣೆ ಅಮರೇಶ್ ಕನ್ಸಲ್ಟೆನ್ಸಿಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
    Close: "ಮುಚ್ಚಿ",
  },
  hi: {
    "Select City": "शहर चुनें",
    "Professional firm for": "पेशेवर फर्म",
    "tax | audit | advisory": "टैक्स | ऑडिट | सलाह",
    "ABOUT US": "हमारे बारे में",
    SERVICES: "सेवाएं",
    "CONTACT US": "संपर्क करें",
    Call: "कॉल",
    Mail: "मेल",
    Payment: "भुगतान",
    "Client login": "क्लाइंट लॉगिन",
    "Amaresh Consultancy": "अमरेश कंसल्टेंसी",
    "chartered accountants": "चार्टर्ड अकाउंटेंट्स",
    "Taxation, audit, accounting, compliance": "टैक्स, ऑडिट, अकाउंटिंग, अनुपालन",
    "Income Tax": "आयकर",
    "Consultancy, tax audit, advisory": "सलाह, टैक्स ऑडिट, परामर्श",
    GST: "जीएसटी",
    "Registration, returns, reconciliation": "पंजीकरण, रिटर्न, मिलान",
    "Audit Support": "ऑडिट सहायता",
    "Statutory, internal, and compliance": "वैधानिक, आंतरिक और अनुपालन",
    Services: "सेवाएं",
    "Services planned around the way clients actually need CA support.":
      "क्लाइंट की वास्तविक CA जरूरतों के अनुसार तैयार सेवाएं.",
    Auditing: "ऑडिटिंग",
    "Transfer Pricing": "ट्रांसफर प्राइसिंग",
    "Start Up": "स्टार्ट अप",
    Outsourcing: "आउटसोर्सिंग",
    Advisory: "सलाह",
    "Management Consulting": "मैनेजमेंट कंसल्टिंग",
    "Statutory Audit": "स्टैच्यूटरी ऑडिट",
    "Internal Audit": "इंटरनल ऑडिट",
    "IND AS": "IND AS",
    "Public Sector Audit": "पब्लिक सेक्टर ऑडिट",
    "Company Secretarial Services": "कंपनी सेक्रेटेरियल सेवाएं",
    "Transfer pricing documentation": "ट्रांसफर प्राइसिंग दस्तावेज",
    "International transaction review": "अंतरराष्ट्रीय लेनदेन समीक्षा",
    "Compliance support": "अनुपालन सहायता",
    "GST Registration": "जीएसटी पंजीकरण",
    "GST Audit": "जीएसटी ऑडिट",
    "GST Services": "जीएसटी सेवाएं",
    "Tax Consulting Services": "टैक्स कंसल्टिंग सेवाएं",
    "Tax Audit": "टैक्स ऑडिट",
    "Income Tax Advisory": "आयकर सलाह",
    "NRI Taxation": "NRI टैक्सेशन",
    "Easy IT Filing": "आसान IT फाइलिंग",
    "Startup Registration Process": "स्टार्टअप पंजीकरण प्रक्रिया",
    "Setting Up New Business": "नया व्यवसाय शुरू करना",
    "Startup Funding": "स्टार्टअप फंडिंग",
    Proprietorship: "प्रोप्राइटरशिप",
    Partnership: "पार्टनरशिप",
    "Limited Liability Partnership": "लिमिटेड लायबिलिटी पार्टनरशिप",
    Trust: "ट्रस्ट",
    Society: "सोसाइटी",
    "Private Limited Company": "प्राइवेट लिमिटेड कंपनी",
    "Accounting outsourcing": "अकाउंटिंग आउटसोर्सिंग",
    "Compliance outsourcing": "अनुपालन आउटसोर्सिंग",
    "Payroll and records support": "पेरोल और रिकॉर्ड सहायता",
    "Financial advisory": "वित्तीय सलाह",
    "Business advisory": "व्यवसाय सलाह",
    "Compliance advisory": "अनुपालन सलाह",
    "Joint Development Agreement": "जॉइंट डेवलपमेंट एग्रीमेंट",
    "Labour Law Consultancy": "लेबर लॉ कंसल्टेंसी",
    "Energy Sector Services": "एनर्जी सेक्टर सेवाएं",
    "Fixed Asset Verification": "फिक्स्ड एसेट वेरिफिकेशन",
    "Why clients choose us": "क्लाइंट हमें क्यों चुनते हैं",
    "Reliable CA services with attention to detail and practical business sense.":
      "विवरण पर ध्यान और व्यावहारिक व्यावसायिक समझ के साथ भरोसेमंद CA सेवाएं.",
    Responsive: "त्वरित जवाब",
    Organized: "संगठित",
    Clear: "स्पष्ट",
    "Our Team": "हमारी टीम",
    "Meet the founder behind Amaresh Consultancy.": "अमरेश कंसल्टेंसी के संस्थापक से मिलें.",
    Founder: "संस्थापक",
    "Chartered Accountant": "चार्टर्ड अकाउंटेंट",
    "Contact Us": "संपर्क करें",
    "Send an enquiry and start with a consultation.": "पूछताछ भेजें और सलाह से शुरुआत करें.",
    Phone: "फोन",
    Email: "ईमेल",
    Office: "ऑफिस",
    Name: "नाम",
    "Your name": "आपका नाम",
    "Service needed": "आवश्यक सेवा",
    Message: "संदेश",
    "Tell us what you need help with": "बताएं आपको किस मदद की जरूरत है",
    "Send enquiry": "पूछताछ भेजें",
    "Head Office": "मुख्य कार्यालय",
    "Open map": "मैप खोलें",
    "Our Business Hours": "काम का समय",
    "Monday to Saturday": "सोमवार से शनिवार",
    "Follow Us On": "हमें फॉलो करें",
    "New client register": "नया क्लाइंट रजिस्टर",
    "Client Access": "क्लाइंट एक्सेस",
    Login: "लॉगिन",
    Continue: "जारी रखें",
    "New Client": "नया क्लाइंट",
    Register: "रजिस्टर",
    "Mobile number": "मोबाइल नंबर",
    "Service required": "आवश्यक सेवा",
    "Submit request": "अनुरोध भेजें",
    "Thank you": "धन्यवाद",
    "We will get back to you soon.": "हम जल्द ही आपसे संपर्क करेंगे.",
    "Your enquiry has been sent to Amaresh Consultancy.":
      "आपकी पूछताछ अमरेश कंसल्टेंसी को भेज दी गई है.",
    Close: "बंद करें",
  },
};

const translatableElements = Array.from(
  document.querySelectorAll("a, button, h1, h2, h3, p, strong, small, span, dt, label, li, option")
).filter((element) => {
  const tagName = element.tagName.toLowerCase();
  const isAllowedButton = tagName === "button";
  return element.children.length === 0 || isAllowedButton;
});

translatableElements.forEach((element) => {
  element.dataset.originalText = element.textContent.trim();
});

document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((element) => {
  element.dataset.originalPlaceholder = element.placeholder;
});

document.querySelectorAll(".contact-form label, .mini-form label").forEach((label) => {
  const labelTextNode = Array.from(label.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
  );

  if (labelTextNode) {
    label.dataset.originalLabel = labelTextNode.textContent.trim();
  }
});

function translatePage(language) {
  const dictionary = translations[language] || {};

  translatableElements.forEach((element) => {
    const originalText = element.dataset.originalText;
    const translatedText = dictionary[originalText] || originalText;

    if (element.tagName.toLowerCase() === "button" && originalText.includes("->")) {
      const arrow = originalText.includes("->") ? " ->" : "";
      element.textContent = `${dictionary[originalText.replace(" ->", "")] || originalText.replace(" ->", "")}${arrow}`;
      return;
    }

    element.textContent = translatedText;
  });

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((element) => {
    const originalPlaceholder = element.dataset.originalPlaceholder;
    element.placeholder = dictionary[originalPlaceholder] || originalPlaceholder;
  });

  document.querySelectorAll(".contact-form label, .mini-form label").forEach((label) => {
    const originalLabel = label.dataset.originalLabel;
    const labelTextNode = Array.from(label.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );

    if (originalLabel && labelTextNode) {
      labelTextNode.textContent = `${dictionary[originalLabel] || originalLabel}\n              `;
    }
  });
}

languageSelect?.addEventListener("change", (event) => {
  translatePage(event.target.value);
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);

  formStatus.textContent = "";
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to send enquiry");
    }

    contactForm.reset();
    successModal.hidden = false;
  } catch (error) {
    formStatus.textContent =
      "Unable to send from this preview. Please open the website through hosting or a local web server, then try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = translations[languageSelect?.value]?.["Send enquiry"] || "Send enquiry";
  }
});

ticketForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = ticketForm.querySelector('button[type="submit"]');
  const formData = new FormData(ticketForm);

  ticketStatus.textContent = "";
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const response = await fetch(ticketForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to submit ticket");
    }

    ticketForm.reset();
    ticketModal.hidden = true;
    successModal.hidden = false;
  } catch (error) {
    ticketStatus.textContent =
      "Unable to submit from this preview. Please open the website through hosting or a local web server, then try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit ticket";
  }
});

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedService = tab.dataset.serviceTab;

    serviceTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    servicePanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.servicePanel === selectedService);
    });
  });
});

document.querySelectorAll("[data-open-login]").forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.hidden = false;
  });
});

document.querySelectorAll("[data-open-register]").forEach((button) => {
  button.addEventListener("click", () => {
    registerModal.hidden = false;
  });
});

document.querySelectorAll("[data-open-ticket]").forEach((button) => {
  button.addEventListener("click", () => {
    ticketModal.hidden = false;
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").hidden = true;
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });
});
