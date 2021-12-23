import { formatNumber } from "@angular/common";

const allStrategies = [
    'Skillset',
    'Culture of innovation',
    'Partner Ecosystem',
    'Operational Efficiencies',
    'Internal Quality Support',
    'Patient & Consumer Q',
    'Data & Analytics',
    'Intelligent Automation',
];

const function_owners = ["Q&C", "BRQC", "PQM"];

const investment_type = ["Strategic"];

const car_status = ["Not Yet Started", "Draft", "Business Alligned", "Submitted"]

const primary_accelerators = ["Select For Success", "Design For Access", "Dirve The Debate", "Analyze And Discript", "Complete For Patients"]

const primary_dimensions = ["Our People", "Trusted Partnership", "Quality As a Differentiator", "Next Generation Quality"]

const primary_allignment = ["100% Integrated EZE Data", "100% Digital QMS", "80% Automated QC and Product Release", "75% Focused on Patient, Customer and Customer Exp", "96% Satisfaction in Customer Facing KPI's"]

const primary_valuescore = ["the Ratio"]

const strategiesMap = [
    {
        name: "People",
        children: [
            "Skillset",
            "Culture of innovation"
        ]
    },
    {
        name: "Trusted Partnerships",
        children: [
            "Partner Ecosystem",
            "Operational Efficiencies"
        ]
    },
    {
        name: "Quality as a differentiator",
        children: [
            "Internal Quality Support",
            "Patient & Consumer Q"
        ]
    },
    {
        name: "Next Gen Quality",
        children: [
            "Data & Analytics",
            "Intelligent Automation",

        ]
    }
];

let owners: any = [];


const ownerColors = [
    'blue',
    'red',
    'purple',
    'green',
    'pink',
    'cyan',
    'yellow',
    'orange',
    'grey'
]

const getAccelarators = (rawData: any) => {
    return ["Select for Success",
        "Design for Access",
        "Drive the Debate",
        "Analyze and Disrupt",
        "Compete for Patients",
        "Across Accelerators"];
};

const getOwners = (rawData: any) => {
    let entries: any = [];
    entries = [
        ...new Set(
            rawData.reduce((acc: any, i: any) => {
                const qE = i.functionalOwnership;
                acc.push(qE);
                return acc;
            }, [])
        ),
    ];
    entries.forEach((element, index) => {
        owners.push({ "name": element, "fill": ownerColors[index] })
    });
    return owners;
};

const getStratergies = (rawData: any) => {
    let result: any = [];
    allStrategies.forEach(element => {
        let initiatives = rawData.filter(item => item.strategies.includes(element));
        let totalProjectsCost = initiatives.reduce(function (acc, obj) { return acc + (obj.totalProjectCost ? obj.totalProjectCost : 0) }, 0);
        result.push({ "name": element, "value": 1, "initiatives": initiatives.length, "totalProjectsCost": totalProjectsCost.toFixed(2) });

    });
    return result;
};

const getInitiatives = (rawData: any) => {
    let result: Array<string> = [];
    rawData.forEach((element, index) => {
        result = result.concat((index + 1) + "." + element.initiative);
    });
    return [...new Set(result)];
};

const lookupTopStrategy = (strategy: any) => {
    let topStrategy = "n/a";
    strategiesMap.forEach((obj: any) => {
        if (obj.children.indexOf(strategy) >= 0) {
            topStrategy = obj.name;
        }
    });
    return topStrategy;
}


const getInitiativesSeries = (rawData: any) => {
    rawData.forEach((entry: any, initIndex: number) => {
        entry.strategies.forEach((strategy: any, index: any) => {
            let seriesObj: any = {};
            var id = initIndex + 1;
            seriesObj.id = id;
            seriesObj.initiative = id + "." + entry.initiative;
            seriesObj.qualityEnabler = entry.qualityEnabler;
            seriesObj.strategy = strategy;
            seriesObj[`start${initIndex}`] = allStrategies.indexOf(strategy);
            seriesObj[`end${initIndex}`] = allStrategies.indexOf(strategy) + 1;
            seriesObj.topStrategy = lookupTopStrategy(strategy);
            seriesObj.owner = entry.functionalOwnership;
            seriesObj.qualityEnabler = entry.qualityEnabler;
            seriesObj.investmentType = entry.investmentType;
            seriesObj.potentialRisk = entry.potentialRisk;
            seriesObj.description = entry.description;
            seriesObj.potentialRisk = entry.potentialRisk;
            seriesObj.investmentType = entry.investmentType;
            seriesObj.projectManager = entry.projectManager;
            seriesObj.projectSponsor = entry.projectSponsor;
            seriesObj.projectName = entry.projectName;
            seriesObj.businessObjectivesRelational = entry.businessObjectivesOrExpectations,
                //seriesObj.function = [];
            seriesObj.functionalOwnership = entry.functionalOwnership;
            seriesObj.projectId = entry.projectId;
            seriesObj.totalProjectValue = entry.totalProjectValue;
            seriesObj.totalProjectCost = entry.totalProjectCost;
            seriesObj.expense = entry.expense;
            seriesObj.capital = entry.capital;
            seriesObj.startDate = entry.startDate;
            seriesObj.endDate = entry.endDate;
            seriesObj.carStatus = entry.carStatus;
            seriesObj.involvedTechnologyOrSystem = entry.involvedTechnologyOrSystem;
            seriesObj.janssenOneAccelerator = entry.janssenOneAccelerator;
            seriesObj.bamAllignment = entry.bamAllignment;
            seriesObj.rpaValueScore = entry.rpaValueScore;
            seriesObj.resourceRequired = entry.resourceRequired;
            seriesObj.roi = entry.roi;
            seriesObj.affectedQCDimensions = entry.affectedQCDimensions;
            // seriesObj.color = getInitiativeColor(entry.initiative, chartSeries);
            chartDataSeries.push(seriesObj);
        });

    });
    return chartDataSeries;
};

let chartDataSeries: any = [];

function getInitiativeColor(init: string, chartSeries) {
    let entry = chartSeries.find((element, index) => element.initiative === init) || { functionalOwnership: "n/a" };
    let match = owners.find(t => t.name === entry.functionalOwnership);
    console.log("init:" + init + "matched?" + match.name + "color :" + match.fill);

    if (match) {
        return match.fill;
    } else {
        return "grey";
    }

}

export {
    owners,
    getAccelarators,
    getStratergies,
    getOwners,
    getInitiatives,
    getInitiativesSeries,
    getInitiativeColor,
    function_owners,
    investment_type,
    car_status,
    primary_accelerators,
    primary_dimensions,
    primary_allignment,
    primary_valuescore
};
