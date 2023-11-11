const DEFAULT = '-';

criterias = {
    country: DEFAULT,
    region: DEFAULT,
    city: DEFAULT,
    industry: DEFAULT,
    businessCategory: DEFAULT,
    employeeCount: DEFAULT,
    estimatedRevenue: DEFAULT,
    keywords: DEFAULT,
    products: DEFAULT,
}

function handleCountryChange() {
    const countryInput = document.getElementById('country');
    criterias.country = countryInput.value;
    enableContinueButton();
}

function handleRegionChange() {
    const regionInput = document.getElementById('region');
    criterias.region = regionInput.value;
    enableContinueButton();
}

function handleCityChange() {
    const cityInput = document.getElementById('city');
    criterias.city = cityInput.value;
    enableContinueButton();
}


function handleIndustryChange() {
    const locationDropdown = document.getElementById('industry');
    criterias.industry = locationDropdown.value;
    enableContinueButton();
}

function handleBusinessCategoryChange() {
    const businessCategoryDropdown = document.getElementById('businessCategory');
    criterias.businessCategory = businessCategoryDropdown.value;
    enableContinueButton();
}

function handleEstimatedRevenueChange() {
    const estimatedRevenueDropdown = document.getElementById('estimatedRevenue');
    criterias.estimatedRevenue = estimatedRevenueDropdown.value;
    enableContinueButton();
}

function handleEmployeeCountChange() {
    const employeeCountDropdown = document.getElementById('employeeCount');
    criterias.employeeCount = employeeCountDropdown.value;
    enableContinueButton();
}

function handleKeywordsChange() {
    const keywordsDropdown = document.getElementById('keywords');
    criterias.keywords = keywordsDropdown.value;
    enableContinueButton();
}

function handleProductsChange() {
    const productsDropdown = document.getElementById('products');
    criterias.products = productsDropdown.value;
    enableContinueButton();
}

async function handleCriteriasRequests() {
    const resp = await axios({
        url: 'http://localhost:8000/api/v1/competition',
        method: 'post',
        headers: {
            "Content-Type": 'application/json',
        },
        data: criterias
    });
    console.log(resp.data.msg);
}

// function enableContinueButton() {
//     const continueBtn = document.getElementById('continueBtn');

//     let found = false;
//     for (const [_, value] of Object.entries(criterias)) {
//         found |= value === DEFAULT;
//     }

//     if (!found) {
//         continueBtn.classList.remove('hidden');
//     } else {
//         continueBtn.classList.add('hidden');
//     }
// }
