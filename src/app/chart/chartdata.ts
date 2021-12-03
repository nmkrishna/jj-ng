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
            "Patient & Consumer QMS"
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

export const rawData = [
    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Upgrade operating model',
        initiative:
            'Quality operating model, process, and quality system (for BCMA CAR-T)',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description:
            'Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Huimin Yuan',
    },
    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Upgrade operating model',
        initiative:
            'Quality operating model, process, and quality system (for Vaccines)',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description: '',
        functionalOwnership: 'Janssen PQM,JSCQ,BRQC',
        projectLead: 'Huimin Yuan',
    },
    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Upgrade operating model',
        initiative: 'Quality operating model upgrade Digital Health',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
            'Data & Analytics',
        ],
        description:
            'With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.',
        functionalOwnership: 'Janssen PQS',
        projectLead: 'R. Famiglietti',
    },
    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Upgrade operating model',
        initiative:
            'Quality Frame Work, operating model, quality system and phase appropriate GMP supporting DPDS',
        strategies: ['Operational Efficiencies', 'Internal Quality Support'],
        description: '',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Brenda Van Assche',
    },
    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Upgrade operating model',
        initiative:
            'Support Product Segmentation by driving Fit for purpose quality framework design and implementation (e.g. POLO, Risk management for late stage products, Delist/divest processes, etc.)',
        strategies: ['Operational Efficiencies', 'Internal Quality Support'],
        description: '',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Angela Costantino',
    },

    {
        janssenOneAccelerator: 'Select for Success',
        qualityEnabler: 'Q&C expertise specific to new modalities',
        initiative:
            'Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ',
        strategies: [
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description: '',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Huimin Yuan/Amit Khaolkar/Lisa Forian',
    },

    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Faster innovation speed and approvals',
        initiative: 'xSector R&D operating model (Fit for purpose QMS)',
        strategies: [
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description:
            'Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.',
        functionalOwnership: 'Janssen BRQC',
        projectLead: 'R. Famiglietti',
    },

    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Faster innovation speed and approvals',
        initiative:
            'Support Best product at launch (BPAL) by driving quality framework to strike the balance of speed, cost, and long term LCM needs',
        strategies: ['Operational Efficiencies', 'Internal Quality Support'],
        description:
            'Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Lisa Forian / Huimin Yuan',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Faster innovation speed and approvals',
        initiative:
            'Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM',
        strategies: [
            'Operational Efficiencies',
            'Internal Quality Support',
            'Data & Analytics',
        ],
        description:
            'Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Matt Matuszewski',
    },

    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative: 'Patient consumer quality',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description:
            "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an 'inventory'. A playbook is available online on how to get access to the inventory.",
        functionalOwnership: 'Janssen BQ',
        projectLead: 'Yuderki Tejada-Flotta',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative:
            'Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
        ],
        description: '',
        functionalOwnership: 'Janssen BQ',
        projectLead: 'Renee Nester',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative: 'CXE',
        strategies: [
            'Skillset',
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
            'Data & Analytics',
        ],
        description: '',
        functionalOwnership: 'Enterprise Q&C',
        projectLead: 'Art Caruso',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative: 'Combination Product Process Improvements',
        strategies: [
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
            'Data & Analytics',
        ],
        description: '',
        functionalOwnership: 'Janssen PQM',
        projectLead: 'Amit Khanolkar',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative: 'AcceleRRAte',
        strategies: [
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
            'Data & Analytics',
        ],
        description:
            'Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance.',
        functionalOwnership: 'Janssen BQ',
        projectLead: 'Yuderki Tejada-Flotta',
    },
    {
        janssenOneAccelerator: 'Design for Access',
        qualityEnabler: 'Contribute with integrated customer insights',
        initiative: 'Real World Evidence: Complaints Insights / Escalation',
        strategies: [
            'Culture of innovation',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Patient & Consumer Q',
            'Data & Analytics',
        ],
        description: '',
        functionalOwnership: 'Janssen BQ',
        projectLead: 'Kate Gillespie',
    },
    // --------------------------------
    // --------------------------------
    {
        janssenOneAccelerator: 'Drive the Debate',
        qualityEnabler: 'Lead and enable proactive dialogue',
        initiative: 'Ongoing dialogue',
        strategies: ['Partner Ecosystem'],
        description: '',
        functionalOwnership: 'TBD',
        projectLead: '',
    },
    {
        janssenOneAccelerator: 'Drive the Debate',
        qualityEnabler: 'Lead and enable proactive dialogue',
        initiative:
            'Systematic and holistic orchestration of dialogues with external stakeholders (e.g. industry and regulatory forums)',
        strategies: ['Partner Ecosystem'],
        description: '',
        functionalOwnership: 'TBD',
        projectLead: '',
    },
    {
        janssenOneAccelerator: 'Drive the Debate',
        qualityEnabler: 'Particpate in flagship collaborations',
        initiative: 'Design and lead flagship collaboration projects ',
        strategies: ['Partner Ecosystem'],
        description: '',
        functionalOwnership: 'TBD',
        projectLead: '',
    },
    {
        janssenOneAccelerator: 'Drive the Debate',
        qualityEnabler: 'Particpate in flagship collaborations',
        initiative:
            'Systematic orchestration of new collaboration types tailored to stakeholder groups and purpose',
        strategies: ['Partner Ecosystem'],
        description: '',
        functionalOwnership: 'TBD',
        projectLead: '',
    },

    // --------------------------------
    // --------------------------------
    {
        janssenOneAccelerator: 'Analyze and Disrupt',
        qualityEnabler: 'Build expertise in analytics use cases',
        initiative: 'SCAN',
        strategies: ['Data & Analytics', 'Intelligent Automation'],
        description:
            'Data and Analytics initiative that deals with identifying the right way to use and collect data in order to make quality decisions. Uses cases have been identified in NC reduction, Speed to market increase and a higher reliability. Primary goal is to prevent issues from arising instead of applying corrective actions.',
        functionalOwnership: 'Janssen SCQ',
        projectLead: 'Borke Van Belle',
    },
    {
        janssenOneAccelerator: 'Analyze and Disrupt',
        qualityEnabler: 'Build expertise in analytics use cases',
        initiative: 'Technology & Data Savviness in Quality DnA',
        strategies: ['Skillset', 'Culture of innovation'],
        description:
            'Build internal capability to create and deploy technology and automation solutions, and to evolve from descriptive analytics to advanced analytics',
        functionalOwnership: 'Janssen SCQ',
        projectLead: 'Borke Van Belle',
    },
    {
        janssenOneAccelerator: 'Compete for Patients',
        qualityEnabler: 'Smart quality assurance processes',
        initiative: 'Quality Systems Automation',
        strategies: [
            'Skillset',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Data & Analytics',
            'Intelligent Automation',
        ],
        description:
            'Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.',
        functionalOwnership: 'Enterprise Q&C',
        projectLead: '',
    },
    {
        janssenOneAccelerator: 'Across Accelerators',
        qualityEnabler: 'Capability building & Change Mgmt',
        initiative: 'People',
        strategies: [
            'Skillset',
            'Partner Ecosystem',
            'Operational Efficiencies',
            'Internal Quality Support',
            'Data & Analytics',
            'Intelligent Automation',
        ],
        description:
            'Create a bold and transformed Q&C organization that focuses on the capabilities, development and the culture needed for a prepared and inspired future workforce.',
        functionalOwnership: 'Enterprise Q&C',
        projectLead: '',
    },
];

const ownerColors = [
    '#4285F4',
    '#DB4437',
    '#F4B400',
    '#0F9D58',
    '#3700B3',
    '#018786',
    '#FF0266',
    '#4CAF50',
    '#EF6C00'
]

const categories = [
    ...new Set(
        rawData.reduce((acc: any, i, e) => {
            const qE = i.qualityEnabler;
            acc.push(qE);
            return acc;
        }, [])
    ),
];

const getCategories = (rawData: any) => {
    return [
        ...new Set(
            rawData.reduce((acc: any, i: any) => {
                const qE = i.qualityEnabler;
                acc.push(qE);
                return acc;
            }, [])
        ),
    ];
};

const getAccelarators = (rawData: any) => {
    return [...new Set(rawData.map((i: any) => i.janssenOneAccelerator))];
};

const listOwners = (rawData: any) => {
    return [...new Set(rawData.map((i: any) => i.functionalOwnership))];
};

const OWNERS_COLORS = [{
    "name": "Enterprise Q&C",
    "fill": "blue"
}, {
    "name": "Janssen BRQC",
    "fill": "red"
}, {
    "name": "Janssen PQM",
    "fill": "green"
}, {
    "name": "Janssen PQS",
    "fill": "purple"
}, {
    "name": "Janssen BQ",
    "fill": "pink"
}, {
    "name": "Janssen SCQ",
    "fill": "cyan"
}, {
    "name": "Janssen PQM/JSCQ/BRQC",
    "fill": "yellow"
}];

const getStratergies = (rawData: any) => {
    let result: any = [];
    rawData.map((i: any) => {
        result = result.concat(i.strategies);
    });
    return [...new Set(result)];
};

const lookupTopStrategy = (strategy: any) => {
    let topStrategy = "n/a";
    strategiesMap.forEach((obj: any) => {
        if (obj.children.indexOf(strategy) > 0) {
            topStrategy = obj.name;
        }
    });
    return topStrategy;
}


const getInitiativesSeries = (rawData: any) => {
    rawData.forEach((entry: any, initIndex: number) => {
        entry.strategies.forEach((strategy: any, index: any) => {
            let seriesObj: any = {};
            seriesObj.initiative = entry.initiative;
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
            seriesObj.projectLead = entry.projectLead;
            seriesObj.colorSettings = getOwnerColor(entry.functionalOwnership);

            //Placeholders
            seriesObj.projectName = "Integrated Quality";
            seriesObj.businessObjectivesRelational = "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
                seriesObj.benfitsAndRationale = "";
            seriesObj.function = [];
            seriesObj.projectId = "JSC-0056633";
            seriesObj.financials = {
                "capital": "$0",
                "expense": "$774,000"
            };
            seriesObj.plannedStartDate = "01/Jan/22";
            seriesObj.expireDate = "31/Jan/22";
            seriesObj.carStatus = [
                "Not Yet Started",
                "Draft"
            ];
            seriesObj.primaryJanssenOneAccesslerator = [
                "Complete For Patients"
            ];
            seriesObj.affectedQCDimensions = [
                "Next Generation Quality"
            ];
            seriesObj.bamAllignment = [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ];
            seriesObj.rpaValueScore = [
                "0.2"
            ];
            seriesObj.resourceRequired = "2 FTE";
            series.push(seriesObj);
        });

    });
    return series.splice(0, 100);
};

const getInitiatives = (rawData: any) => {
    let result: any = [];
    rawData.map((i: any) => {
        result = result.concat(i.initiative);
    });
    return [...new Set(result)];
};

const getSeries = (rawData: any, categories: any) => {
    let series: any = [];
    categories.forEach((cat: any) => {
        let seriesObj: any = { owners: [] };
        seriesObj.category = cat;
        rawData.forEach((row: any, index: any) => {
            if (row.qualityEnabler === cat) {
                seriesObj.owners.push(row.functionalOwnership);
            }
        });

        series.push(seriesObj);
    });

    console.log('cat, seriese', categories, series);

    series.forEach((item: any) => {
        owners.forEach((owner: any, index: any) => {
            console.log(
                'series owner',
                item.owners,
                owner,
                item.owners.includes(owner)
            );
            item[`value${index}Label`] = owner;
            item[`value${index}`] = item.owners.includes(owner) ? 1 : 0; //row.functionalOwnership;
        });
    });

    console.log('series with owners', series);

    return series.splice(1, 20);
};

const getOwners = (rawData: any, categories: any) => {
    let owners: any = [];
    categories.forEach((cat: any) => {
        let count = 1;
        rawData.forEach((row: any, index: number) => {
            if (row.qualityEnabler === cat) {
                owners.push(row.functionalOwnership);
                count++;
            }
        });
        count = 1;
    });

    return [...new Set(owners)];
};

console.log('qualityEnabler categories', categories);
let series: any = [];
let owners: any = [];
categories.forEach((cat) => {
    let seriesObj: any = { val: [] };
    let count = 1;
    seriesObj.category = cat;
    rawData.forEach((row, index) => {
        if (row.qualityEnabler === cat) {
            seriesObj[`value${count}Label`] = row.functionalOwnership;
            owners.push(row.functionalOwnership);
            seriesObj[`value${count}`] = 1; //row.functionalOwnership;
            count++;
        }
    });
    count = 1;
    series.push(seriesObj);
});

const categoryData = series;
owners = [...new Set(owners)];
const accelerators = [...new Set(rawData.map((i) => i.janssenOneAccelerator))];


function getOwnerColor(owner: string) {
    return ownerColors[owners.indexOf(owner)];;
}

export {
    series,
    owners,
    accelerators,
    getCategories,
    getAccelarators,
    getStratergies,
    getOwners,
    getSeries,
    getInitiatives,
    getInitiativesSeries,
    getOwnerColor,
    function_owners,
    investment_type,
    car_status,
    primary_accelerators,
    primary_dimensions,
    primary_allignment,
    primary_valuescore,
    OWNERS_COLORS
};
