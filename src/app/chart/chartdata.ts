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

export const rawData = [
    {
        "rpaValueScore": "TBD",
        "projectManager": "Loic Hascher",
        "capital": 13082934,
        "initiative": "Next Gen Quality Systems",
        "functionalOwnership": "Pharm - Quality Systems",
        "involvedTechnologyOrSystem": "ComplianceQuest",
        "totalProjectValue": 21700000,
        "strategies": [
            "Skillset",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "9/14/25",
        "projectSponsor": "Rob Famiglietti",
        "description": "Work to create a common and simple user experience, that is agnostic to underlying source systems and enables automation and compliance to reduce manual work, improve usability/efficiency and eliminate the gaps in user access management. ",
        "expense": 11868578,
        "bamAllignment": "100% Digital QMS",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Next Gen QS will be transformational to the way we do business.  It will deliver time savings as processes will be more efficient and the system will be intuitive requiring less training.  It will allow for us to shift resources from repetitive data entry tasks which will be automated by the system to serving as Quality improvement professionals.  Additionally it will provide lower operational costs as the system will be SAAS. \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP21 - Next Gen Quality Systems",
        "projectId": "JSC-0100010",
        "startDate": "9/30/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Laurens Oort",
        "capital": 0,
        "initiative": "-",
        "functionalOwnership": "Pharm - Quality PPM",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "9/14/27",
        "projectSponsor": "Merdice Evans",
        "description": "CxE will proactively deliver innovative product Quality solutions to enhance customer, consumer experiences and patient outcomes.​",
        "expense": 2000000,
        "bamAllignment": "98% Satisfaction in Customer Facing KPIs",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Pharma prioritization includes reduce ​one-press user errors, reduce damaged needle, reduce Tremfya Plunger Separations, reduce Tremfya & Stelara UltraSafe user errors, reduce Product Dose Omission (Missed Dose)​, reduce Tremfya & Stelara UltraSafe user Errors​, and ​reduce Lack of Effect (LOE).",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "Customer Experience Engineering (CxE)",
        "projectId": "JSC-0048345",
        "startDate": "2/7/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Karen O'Hagan,C. Elizabeth Truman",
        "capital": 872000,
        "initiative": "Complaints Compliance and Improvement",
        "functionalOwnership": "Pharm - Business Quality",
        "involvedTechnologyOrSystem": "PQMS",
        "totalProjectValue": 200000,
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Sharon Luzie",
        "description": "PQMS automation and data integration improvements.  A stable team will be kept in place to address system enhancements, incidents, and Business Partner releases between the platform. This record/CAR is for the Pharm portion of the stable team splitting with Consumer.",
        "expense": 353000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Maintain a Stable team in support of PQMS for product quality complaints to ensure Compliance to Global Regulatory Requirements, sustain system maintenance, deliver business needs and drive digital roadmap automation.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Complaints Compliance and Improvements - STABLE TEAMS PQMS",
        "projectId": "JSC-0045397",
        "startDate": "2/14/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 0,
        "initiative": "-",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "CDL",
        "totalProjectValue": 0,
        "strategies": [
            "Data & Analytics"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Continued funding for CDL ingestion work",
        "expense": 500000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Ingestion of following data sources:\n- eLIMS\n- Empower\n- SmartQC\n- SmartQA",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "Quality CDL Data Ingestion",
        "projectId": "JSC-0046962",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Martin Roy,Karen O'Hagan",
        "capital": 790000,
        "initiative": "Pharma PQV Compliant Digital AI",
        "functionalOwnership": "Pharm - Business Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 200000,
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Sharon Luzie",
        "description": "Phase 3 for AI Insights tool. Update UX with trending functionality and topic trending alarm for complaint data.  Improvement of insight tool",
        "expense": 301000,
        "bamAllignment": "98% Satisfaction in Customer Facing KPIs",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Phase 3 for AI Insights tool. Update UX with trending functionality and topic trending alarm for complaint data. Improvement of insight tool for end users.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Pharma PQV Complaint Digital AI",
        "projectId": "JSC-0045398",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Carmen Verhoeven",
        "capital": 1706250,
        "initiative": "Paperless Labs 2022",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Paperless Labs",
        "totalProjectValue": 800000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "5/26/27",
        "projectSponsor": "Swroop Sahota",
        "description": "Deployment of Paperless Labs in the labs: enhancement of the LME functionality in Elims, instrument connections, implementation of paperless methods replacing worksheets or logbooks)",
        "expense": 818749.998,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "LOTF: Deployment of Paperless Labs according to the roadmap in JSC One Lab organization.\nIncluding:\n- Instrument connections\n- Implementation of paperless methods replacing worksheets or other paper-based methods\n- Harmonization of methods across the network (whenever possible)\n- Implementation of reagent module",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - Paperless labs",
        "projectId": "JSC-0045415",
        "startDate": "3/31/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "Automation of QC Lab Operations",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 370000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "9/30/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Implementation of projects enhancing lab operation by introducing automation.",
        "expense": 224333,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "New Technology Roadmap for automation in JSC CQ Labs:\n1) To deploy DNA qPCR to remove radioactive probe for testing IPC samples in Cork Bio and Leiden\n2) To deploy Growth Direct to test Enviromental Monitoring samples in Cork and Schaffausen\n3) Labotica: To implement a pilot technology in Latina to fully automate tablets weight, NIRtesting, sample preparation and evaluate the scalability\n4) TECAN: The purpose of this project is to implement the valiadated, automated  methods to Leiden, Schaffhausen and Cork labs.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP21 - AC CoE - Automation of QC Lab Operations",
        "projectId": "JSC-0099588",
        "startDate": "1/1/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Sarah Nielsen",
        "capital": 0,
        "initiative": "Digital Integrated Quality",
        "functionalOwnership": "JSCQ - Quality Assurance",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 330000,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "9/17/23",
        "projectSponsor": "Swroop Sahota",
        "description": "To fund portions of the Integrated digital Quality Roadmap and related expenses, (2) Post-doctoral Fellow Modeling Resources for 1 year",
        "expense": 0,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Xarelto RTR - 1.3MM NPV over 10 years (QC savings alone) plus 10 day reduction in release time.   Apaludamide 1.0MM NPV Savings over 10 years (QC Alone), plus 10 day reduction in release time.   Quality Standards Data Visualizations 2-3 FTE Savings 1.2 MM NPV over 10 years plus 50% reduction in QI time.   E2E advanced analytics on high volume or difficult products leading to SLOB reduction.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "2021 Digital Integrated Quality",
        "projectId": "JSC-0099606",
        "startDate": "1/4/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "David Enck",
        "capital": 765000,
        "initiative": "PQM Work Center",
        "functionalOwnership": "Pharm - Product Quality Mgmt",
        "involvedTechnologyOrSystem": "PQM Work Center",
        "totalProjectValue": 0,
        "strategies": [
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "5/5/24",
        "projectSponsor": "Juergen Wolfgang",
        "description": "A solution that will increase the efficiency and capability to assure Product Quality given the documents, reports, and records that PQOs have to manage from TOO to product delisting/divesting.",
        "expense": 222000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "PQM Work Center aims to improve the efficiency of accessing product related data from multiple source systems to support products that are in commercial production. The product data currently accessed by PQM professionals come from a variety of data sources such as:\n- Trackwise (Quality data such as Complaints, CAPA, NC’s, CR’s etc.), \n- RIM Docs and TruVault,\n- Laboratory Information Management System (LIMS),\n- SAP.\nThe goal of this project is to aggregate product related information from these systems via the Common Data Layer (CDL) and allow PQM professionals to persist links between data for specific products from these disparate data sources and create Product Specific Dashboards. \n",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "PQM Work-Center 2022 (PQO)",
        "projectId": "JSC-0045663",
        "startDate": "12/10/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 0,
        "initiative": "Intelligent Automaton in Quality",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 1475000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Quality BOTs, cognitive automation and digitalization.",
        "expense": 510000,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "- Quality Bots for transactional and rule-based repetitive Quality tasks including remote work, Quality Oversight and full automation of Digital Batch Release, moving from IT-guided to self service\n- Cognitive automation for complex and human-logic Quality activities including e2e processing of Quality tasks and processes in release and oversight\n- Automation and digitalization of system and process adoption",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Intelligent Automation in Quality",
        "projectId": "JSC-0046000",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Carmen Verhoeven",
        "capital": 486756,
        "initiative": "Paperless Labs 2021",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Paperless Labs",
        "totalProjectValue": 650000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "5/26/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Deployment of Paperless Labs in the labs: enhancement of the LME functionality in Elims, instrument connections, implementation of paperless methods replacing worksheets or logbooks)",
        "expense": 394923,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "LOTF: Deployment of Paperless Labs according to the roadmap in JSC One Lab organization.\nIncluding:\n- Instrument connections\n- Implementation of paperless methods replacing worksheets or other paper-based methods\n- Harmonization of methods across the network (whenever possible)\n- Implementation of reagent module",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "Lab Systems - Paperless Labs - 2021",
        "projectId": "JSC-0099848",
        "startDate": "5/31/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Sarah Nielsen",
        "capital": 0,
        "initiative": "Integrated Quality",
        "functionalOwnership": "JSCQ - Quality Assurance",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 1550000,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Funding for the small molecule digital integrated quality roadmap. ",
        "expense": 774000,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "The funds will:\n1.\t~200k: Finalize the Geel Apalutamide DP Intermediate Project (expected savings ~3MM over 10 years)\n2.\t~100k: Development of models for Zyrtec, Benadryl and Simply Sleep (for our Latina and Gurabo Sites) and 2 Pharma products (DPDS back charge) – Business Value -  all these products will be less than 1 day release\n3.\t~210k: Erleada DP Real Time Release including Incoming Raw Material PAT testing (business case TBS, but expected to be on the order of 1.5MM over 10 years)\n4.\t~220k: Daruavir End to End RTR (Fund a DOE to control particle size of Darunavir for Symtuza, Business case on the order of 1.0MM SLOB reduction)\n5.\t~50k: Business support lead backcharge.  Charge out for headcount to support project implementation.\n",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "2022_Integrated Quality",
        "projectId": "JSC-0056633",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "LCI Methods Remediation",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Operational Efficiencies",
            "Patient & Consumer Q"
        ],
        "endDate": "10/31/23",
        "projectSponsor": "Swroop Sahota",
        "description": "Remediation of method perfromance issues (SM and LM) as determined and prioritized from the Lab Compliance Initiative Methods Workstream, LCI MT2 primary deliverable.",
        "expense": 236140,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "As per defined and approved action plans (as per QS records) remediate method perfromance issues (SM and LM) as determined and prioritized from the Lab Compliance Initiative Methods Workstream, LCI MT2 primary deliverable. Implement corrective actions.\nMultiple site are involved.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Compliance",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE -JSCQ Lab Compliance Initiative_Methods remediation (SM_LM)",
        "projectId": "JSC-0045634",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 630000,
        "initiative": "eLIMS",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "eLIMS",
        "totalProjectValue": 0,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Swroop Sahota",
        "description": "eLIMS - Continuous improvement eLIMS system, reports, and trending tools to improve compliance, DI, productivity and efficiency in all labs.",
        "expense": 425000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Business Objectives/Expectations: Will be finalised Q4, 2021 (For 2021, extended external roles to enable ECL & EM integration to support vaccines, enhanced RTR functionality, controlled substance functionality to sync with local health authority commitments, include new regulatory requirements for Certificate of Analysis (CofA), iLABs functionality to enable paperless labs and related audit trail reports, automate stability management and government. eLIMS will be upgraded to version LV 8.6 to align Oracle version of database.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - eLIMS.",
        "projectId": "JSC-0057874",
        "startDate": "1//2022"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 500000,
        "initiative": "Quantify the State of Quality",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 1960000,
        "strategies": [
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Create insights into the performance of Quality across sites by standardizing reports and metrics. Reports will be auto-generated to enable dedication of more time to value added work.",
        "expense": 175000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "- Descriptive and diagnostic Quality and Business Performance analytics (information, data, metrics). Data Analytics exploration and R&D\n- Auto-generation of Periodic Review Reports \n- Proactive compliance and risk monitor on external Quality (Supplier risk monitoring, Material risk monitoring, processes, product, operations, etc)\n- Proactive compliance and risk monitor on internal processes, product, operations, etc \n- GMPification of the Data Science Applications and Solutions\n",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - QuantifytheStateofQuality",
        "projectId": "JSC-0046001",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Laurens Oort",
        "capital": 0,
        "initiative": "Outsourcing Optimization - APR-CPV/eLIMS",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "eLIMS",
        "totalProjectValue": 200000,
        "strategies": [
            "Internal Quality Support"
        ],
        "endDate": "6/25/23",
        "projectSponsor": "Swroop Sahota",
        "description": "Optimize outsourcing of APR-CPV Doc Management and eLIMS Master Data Management",
        "expense": 0,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Optimizing the outsourcing of APR/CPV, Doc Management and eLIMS Master Data Management By Altran and GWV through reduced activity cost (price per activity, unit) driven by competitive cost and automation. Renewal of business awards and contracts for the period 2022 to 2024 (3 years). Combined spend in 2021: $2.5MM.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "Optimize outsourcing of APR-CPV Doc. Management & eLIMS Master Data Management",
        "projectId": "JSC-0049617",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 410000,
        "initiative": "SCAN (Scale LM Platform)",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 1608000,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "12/24/23",
        "projectSponsor": "Swroop Sahota",
        "description": "Deployment and sustainability of advanced analytics solution across the Large Molecule Platform (Leiden, Schaffhausen, Cork and Malvern).",
        "expense": 230000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Driving business value through data analytics and democratized data through increase in manufacturing yield, product throughput, reliability and reduction in Cost of poor Quality is a strategic imperative. After successfully proving the business value in initial deployments, the Prometheus project and the NC Advanced Analytics project will integrate to form Supply Chain Analytics (SCAN) and start scaling the pressure tested digital toolbox across JSC Make with focus on the Large Molecule Platform (Cork, Leiden, and Schaffhausen). Through the established and tested SCAN-Process, deployment and expansion of the advanced analytical solutions will focus on the Large Molecule Platform.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "SCAN  (Scale LM Platform) - Janssen Genius",
        "projectId": "JSC-0102217",
        "startDate": "9/25/20"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy",
        "capital": 250000,
        "initiative": "Clarity Project Partnership PCM-Quality",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "6/30/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Collaboration Project PCM-Quality to integrate and create flow.",
        "expense": 250000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Improve supply chain integration, create transparency in current and future lab capacity within the network and across the Sectors, standardize planning processes across the labs.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22-CLARITY Project-Partnership PCM-Quality",
        "projectId": "JSC-0045426",
        "startDate": "6/30/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 0,
        "initiative": "Multi-site Digitization/Qualification",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 100000,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "9/18/22",
        "projectSponsor": "Swroop Sahota",
        "description": "Aligning with the MFF strategy and Quality JSC Digitization Initiative, this is an above site CAPEX Place Holder for a JSC Site pilot of the approved J&J MFF Kneat Platform, which fully digitizes the current Equipment Qualification paper Process.",
        "expense": 0,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "For the Pilot Sites , Latina & Schaffhausen , post implementation, in 2022 $100k reductions is site OPEX & $150K reductions is CAPEX Avoidance.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP21_ONE JSC QUALITY-LABS_Allocation Budget_Multi Site_Digitization_Qualificatio",
        "projectId": "JSC-0102689",
        "startDate": "6/1/20"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Loic Hascher",
        "capital": 519684,
        "initiative": "APQR",
        "functionalOwnership": "Pharm - Quality Systems",
        "involvedTechnologyOrSystem": "APQR",
        "totalProjectValue": 333000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "11/30/23",
        "projectSponsor": "Rob Famiglietti",
        "description": "Development of an end to end Annual Product Review facilitated by automation, via creation of standardized Tableau queries, upgrade of the APQR Schedule Tool and development of a Schedule Predictor Tool. ",
        "expense": 106902,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Development of an end to end Annual Product Review facilitated by automation, via creation of standardized Tableau queries, upgrade of the APQR Schedule Tool and development of a Schedule Predictor Tool are the deliverables of the project.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Compliance",
        "resourceRequired": "TBD",
        "projectName": "BP21 - APQR (IT_1135509)",
        "projectId": "JSC-0042099",
        "startDate": "6/30/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 25000,
        "initiative": "SDMS",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "SDMS",
        "totalProjectValue": 0,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "10/29/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Janssen Supply Chain Quality Labs Funding for Licenses, Connections and IT SOWs for SDMS. ",
        "expense": 125000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "The SDMS Application is the mandated IT Platform & Solution for the Back Up & Restore of all GXP Lab Analytical Instrument Electronic Data. It is a foundational elements in the Data Integrity Compliance in our Labs.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "BP22 JSCQ QC Operation SDMS Pharma Sector",
        "projectId": "JSC-0045696",
        "startDate": "12/1/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 0,
        "initiative": "Empower",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Empower",
        "totalProjectValue": 0,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Empower: New Instrument drivers / DAC upgrade / config changes, Data Analytics.",
        "expense": 370000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "New Instrument drivers / DAC upgrade / config changes, Data Analytics.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - Empower.",
        "projectId": "JSC-0057886",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 0,
        "initiative": "Digital Product Release",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 510000,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Realize exception-based batch review and release through automating and optimizing batch review and release processes driven by elimination of most transactional activities.",
        "expense": 175000,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Realize exception-based batch review and release through automating and optimizing batch review and release processes driven by elimination of most transactional activities.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Digital Product Release",
        "projectId": "JSC-0046005",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 0,
        "initiative": "Quality DNA ",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Skillset",
            "Culture of innovation",
            "Data & Analytics"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Build internal capability to create and deploy technology, digital and automation solutions, and to evolve from descriptive analytics to advanced analytics.",
        "expense": 290000,
        "bamAllignment": "75% Focused on Patient, Consumer & Customer Exp",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "- Data: Tableau training and Tableau CoP events and developer support (includes refresher and expansion training sessions)\n- Data: Azure Databricks for people with coding skills, and Azure Databricks for people with Tableau skills (includes refresher and expansion training sessions)\n- Data Science Boot Camp Participants: 6 month assignment in COE including Data science bootcamp externally\n- Capability build for novel requirements (ML, data architecture, …)",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Technology and Data Savviness in Quality DNA",
        "projectId": "JSC-0046003",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Koen Mol",
        "capital": 0,
        "initiative": "BQ QM JC Quality Enhancements",
        "functionalOwnership": "Pharm - Business Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 148000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "endDate": "1/31/24",
        "projectSponsor": "Sharon Luzie",
        "description": "Part of AcceleRRAte BQ project group.",
        "expense": 300000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Enhancements to JC Qualize are aimed at allowing other functions at LOC level to manage the gap assessment and training management in a similar automated fashion as was developed for CQ. This enhancement mainly impacts Regulatory Affairs. Completion and implementation is expected in Q2 2022. A total investment of $300K is requested.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BQ QM JC Qualize enhancements",
        "projectId": "JSC-0047591",
        "startDate": "3/4/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 25000,
        "initiative": "Compliance Builder",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Compliance Builder",
        "totalProjectValue": 0,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "10/29/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Janssen Supply Chain Quality Labs Funding for Licenses, Connections and IT SOWs for Compliance Builder.",
        "expense": 100000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "To address Data Integrity Gaps on Lab Analytical Instruments that cannot be remediated through instrument replacement, or Firm/Software upgrade. Compliance Builder is the mandated IT Platform & Solution to resolve the following issue: Internal Security-Access Limitations/Audit Train/Data & Time Controls, Data Management, Date Retrieval.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "BP22 JSCQ QC Operation Compliance Builder Pharma Sector",
        "projectId": "JSC-0045688",
        "startDate": "1/1/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "Automation - Environmental Monitoring",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 114000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "12/31/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Reduction of Time to Release (TTR) and automation of read-out of EM plates.",
        "expense": 100005.29,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "The purpose of this project is to expand the scope of applications and  deploy for Grade A samples (Beerse and Schaffhausen) and for batch related samples (EM-IPC) in Cork and Leiden. A new process for sampling and documentation, as well as a new interface between SAP ERP2 and eLIMS needs to be created. (Schaffhausen, Beerse)",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - Automated read-out of plates taken for environmental monitoring.",
        "projectId": "JSC-0045620",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Isabel Verbruggen",
        "capital": 100000,
        "initiative": "External Lab Integration",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 300000,
        "strategies": [
            "Partner Ecosystem"
        ],
        "endDate": "8/22/24",
        "projectSponsor": "Swroop Sahota",
        "description": "External Lab integration (integration of external labs with J&J Lab Systems - Interface building with external systems).",
        "expense": 350000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "- Paperless integration external labs (error proofing), eg  COVID supply chain and CAR-T/Legend partnership  \n     -  IT integration of external labs with J&J Lab Systems, LIMS & Smart QC \n- Reduction of time  \n- Avoiding Human error with transcribing data\n- COVID-19  Support - External Lab and External Manufactures\n- CAR-T / Legend partnership\n- Interface building with external system",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - External Lab integration",
        "projectId": "JSC-0045418",
        "startDate": "4/30/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Katelyn Walsh",
        "capital": 0,
        "initiative": "Controlled Substance Metrics",
        "functionalOwnership": "Pharm - Quality PPM",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "5/23/24",
        "projectSponsor": "Joseph Shepard",
        "description": "Janssen Controlled Substance Metrics.",
        "expense": 350000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "In 2020, develop a URS for Controlled Substance E2E data and metrics for IT system and dashboard requirements\nIn 2021, implement the E2E metrics system (update existing systems and create required dashboards)\n2022 TBD",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "Janssen Controlled Substance Metrics",
        "projectId": "JSC-0034352",
        "startDate": "1/1/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Koen Mol",
        "capital": 0,
        "initiative": "-",
        "functionalOwnership": "Pharm - Business Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 30000,
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "1/31/24",
        "projectSponsor": "Sharon Luzie",
        "description": "BQ AcceleRRAte project.",
        "expense": 150000,
        "bamAllignment": "98% Satisfaction in Customer Facing KPIs",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Enhancements to the Data Warehouse to ensure the AcceleRRAte team has full visibility on parameters that allow to identify risks for non-compliance with Patient Support Programs. This impacts the global oversight as well as visibility for the local operating company RRA oversight committees. A total investment of $ 150k is requested in 2022.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "AcceleRRAte Risk Insights",
        "projectId": "JSC-0047590",
        "startDate": "3/4/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Carmen Verhoeven",
        "capital": 0,
        "initiative": "SMART QA",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Smart QA",
        "totalProjectValue": 10000000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "1/14/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Implementation of Smart QA at Fuji, Xian, Korea, Brazil, Mexico, Athens, Actelion. Further system enhancements to enable QA performance mgt.",
        "expense": 224000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Implementation of Smart QA\nFuji, Xian, Korea, Brazil, Mexico, Athens, Actelion\n\nFurther system enhancements to enable QA performance mgt",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "Lab Systems - Smart QA - 2021",
        "projectId": "JSC-0099829",
        "startDate": "9/30/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Koen Mol",
        "capital": 210000,
        "initiative": "-",
        "functionalOwnership": "Pharm - Business Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 160000,
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support",
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "1/30/24",
        "projectSponsor": "Sharon Luzie",
        "description": "BQ AcceleRRAte project.",
        "expense": 140000,
        "bamAllignment": "98% Satisfaction in Customer Facing KPIs",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "RRAMS Release 2 is aimed at adding functionality to RRAMS to further integrate the RRA process in the system: link with the concept approval, new way of working for the reconciliation process, add the non-compliance processes and allow the users to view the audit trail. This impacts both the Pharma Commercial groups and the Central PV HUB. Completion and implementation is expected in Q3 2022. An investment of $ 350 k is requested for this release in 2022.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "AcceleRRAte RRAMS enhancement",
        "projectId": "JSC-0047464",
        "startDate": "3/3/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "At-Line Water Monitoring",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 189000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "12/31/24",
        "projectSponsor": "Swroop Sahota",
        "description": "At-line water monitoring of one WFI Loop in Leiden.",
        "expense": 69425.16,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "This project is intended to connect the already installed IMD-W system to OSI-PI to enbale automated data transition and handling.\nFurthermore, the reduction in sampling frequency is planned if on-going feasibility studies confirm new sampling frequency.\nSite involved is Leiden.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - At-line water monitoring (IMD-W)",
        "projectId": "JSC-0045588",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Isabel Verbruggen",
        "capital": 75000,
        "initiative": "QC Ops Innovation and Technologies",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 50000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "1/21/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Innovation and technologies (enhance and automate the end user experience with eLims/iLABs).",
        "expense": 200000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "This project is a compilation of innovation initiatives that will further enhance and automate the end user experience with eLims/iLABs and automate the masterdata setup in the system. Today masterdata setup and maintenance is a very manual and labour intense process. The requested budget will be used to support CPI, Test & learns / Proof of concept testing and implementations of 2021 T&L ideas. \nEnd user experience elims, efficiency, iLAB enabling\nHands free login: Provide a more efficient way to login with an Iris or fingerprint scan.\nImprove sample Track&Trace: A digital sample ‘Track & Trace’ system using RFID technology\nVoice recognition: Reduce look-up activities by providing instructions in technician's line of sight (visual/auditory cues), Facilitate Data Entry by using voice\nad hoc sample log: Automate Manual log in of samples for non standard samples (e.g. NPI, cleaning) ( 0,2 FTE/site)\nMaster data automation elims: \nMaster data Comparison: Have a tool available that can automatically highlight all changes both for specification in TV and eLIMS\nTest selection: Cognition Cockpit improvement: it will allow to do reporting and trending without manipulation of the data\nDynamic Forms: Have an electronic smart input FORM for master data request available",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - Innovation and technologies",
        "projectId": "JSC-0045417",
        "startDate": "5/11/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 100000,
        "initiative": "RTR",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Data & Analytics",
            "Intelligent Automation"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Swroop Sahota",
        "description": "RTR (deployment new techniques).",
        "expense": 200000,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "SynTQ is a system that is implemented in 2020 as a pilot project in Gurabo for CANA NIR content uniformity test execution.  The systems is needed to support in the management of the spectral models and calculations (which was a manual process before).  Next steps will be to further deploy SynTQ for managing NIR E2E processes in Geel, Latina and Gurabo:  Test Execution, Model Verification, Model Transfer, Track and Trend fully integrated with eLIMs and the Bruker software.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - RTR.",
        "projectId": "JSC-0057879",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "Automation - Endotoxin Testing (Micro)",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 170000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "12/31/25",
        "projectSponsor": "Borke Van Belle",
        "description": "PyroTecPro implementation in Leiden.",
        "expense": 53131.5,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Implementation of PyroTecPro pipette robot (Tecan) and qualification of equipment in Leiden.  Deployment for selected methods.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - Automated sample preparation for Endotoxin Testing (Micro)",
        "projectId": "JSC-0045614",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi",
        "capital": 0,
        "initiative": "DPDS Resources Lonza rFC Endotoxin",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 130000,
        "strategies": [
            "Partner Ecosystem"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Swroop Sahota",
        "description": "DPDS support funding related to JSC-0055058 - SCH-22-QC Lonza rFC Endotoxin.",
        "expense": 53000,
        "bamAllignment": "N/A",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "DPDS support funding for Schaffhausen rFC Endotoxin test implementation. Equipment covered under project JSC-0055058 - SCH-22-QC Lonza rFC Endotoxin",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - DPDS Resources for Lonza rFC Endotoxin at Schaffhausen",
        "projectId": "JSC-0057210",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Isabel Verbruggen",
        "capital": 0,
        "initiative": "Pharma Data Portal",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 150000,
        "strategies": [
            "Patient & Consumer Q",
            "Data & Analytics"
        ],
        "endDate": "1/8/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Pharma Data Portal BP2022 (keep the lights on).",
        "expense": 150000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Business Objectives/Expectations: Keep the lights on untill Next Gen QS roadmap and scope is clear",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - Pharma Data Portal",
        "projectId": "JSC-0045027",
        "startDate": "2/28/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Bill Fouhy",
        "capital": 0,
        "initiative": "LJSCQ Lab Rapid Methods",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 77000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "12/1/24",
        "projectSponsor": "Swroop Sahota",
        "description": "Replacement of current technology to move to a no-radioactive technology for Simponi and Remicade.",
        "expense": 150000,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "The objective of this project is to replace the current, radioactive based testing for SImponi and Remicade with a new method that provides significant EH&S benefits. \nInvolved sites are Cork, Leiden.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - JSCQ lab rapid  methods (DNA qPCR) implementation (BT)",
        "projectId": "JSC-0057864",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "Automated Mycoplasma Test (BioFire)",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 5274210,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "12/31/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Reduction of Cycle Time by fully automated Mycoplasma Testing (BioFire). Pilot site will be Leiden.",
        "expense": 47228,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Deployment of this automated and rapid technology for Mycoplasma Testing in Leiden for selected products.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - Automated and rapid Mycoplasma Test (BioFire)",
        "projectId": "JSC-0045592",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Loic Hascher",
        "capital": 0,
        "initiative": "Wearables",
        "functionalOwnership": "Pharm - Quality Systems",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 0,
        "strategies": [
            "Culture of innovation",
            "Partner Ecosystem",
            "Operational Efficiencies",
            "Internal Quality Support"
        ],
        "endDate": "9/15/24",
        "projectSponsor": "Rob Famiglietti",
        "description": "This investment will cover development of wearables roadmap for Quality Systems, and fund development and delivery of solutions.  In addition, a portion of this funding will cover the central costs of initial procurement of devices for deployment",
        "expense": 40000,
        "bamAllignment": "100% Digital QMS",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "This investment will cover development of wearables roadmap for Quality Systems, and fund development and delivery of solutions.  In addition, a portion of this funding will cover the central costs of initial procurement of devices for deployment within Q&C.  The primary focus of this effort will be to deploy \"See what I see\" technology to groups across Janssen Q&C.  This will include capabilities for performing virtual remote audits, virtual method transfer, employee training, complaint sample inspection, and other targets, as defined by the Janssen Wearables Council.  This funding will also cover exploratory work into augmented and virtual reality applications for Quality Systems.  Total cost per device with GTS central support currently at $9400.00.  Ten pairs * 23 sites * $6000 per device = $1.4MM.  Will assume over two years, as technology will evolve rapidly.  Including additional $ (double) for development and validation costs",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - Wearables",
        "projectId": "JSC-0045223",
        "startDate": "1/3/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 29517.5,
        "initiative": "JSCQ Tru Tools Implementation",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TruTools",
        "totalProjectValue": 0,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "10/26/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Implementation of Trutools, an improved software application linked to the Raman spectroscopy based rapid identification methods. ",
        "expense": 0,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Implementation of Trutools, an improved software application linked to the Raman spectroscopy based rapid identification methods.\nSite in scope are Latina, Beerse, Geel, Cork, Schaffausen, Gurabo, Mexico, Brazil, Xian.\nThis application improves the specificity of the method thereby expanding the applicability to more products.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Base",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - JSCQ lab TruTools Software implementation (SM)",
        "projectId": "JSC-0045286",
        "startDate": "1/1/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Peggy Van Herzeele,Bill Fouhy,Carmen Verhoeven",
        "capital": 50000,
        "initiative": "SMART QA",
        "functionalOwnership": "JSCQ - Lab Systems",
        "involvedTechnologyOrSystem": "Smart QA",
        "totalProjectValue": 300000,
        "strategies": [
            "Intelligent Automation"
        ],
        "endDate": "12/31/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Smart QA (further deployments)",
        "expense": 81999,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Implementation of Smart QA at more sites\n-\t3 sites: Puebla (B2B); Manati (Sustain), Incheon (PANDA)\n- B2B = leverage from Brazil SJC\n- Sustain = leverage from 2020 sites\n- Panda = leverage from 2021\n- Interface TW on CDL\n\n- Smart QA is a SaaS solution implemented across several Janssen sites. It  increases the visibility and efficiency of the batch release process and enables reduction of variability in batch release cycle times, allowing inventory reduction.  It provides full visibility on batch release interdependencies and batch record review execution.  Smart QA is streamlined with release against agreed standards and priority management.  It is cross-functional with alignment across functions to drive down variation and cycle time.  It has fully automated interfaces to bring information into one place.  There is standardized metrics across sites.  Planning performance is improved by close collaboration.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "QC OPERATIONS BP22 - Smart QA",
        "projectId": "JSC-0045427",
        "startDate": "4/28/22"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "JSQC Lab Rapid Technology Implementation (HMA)",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 38000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "11/2/25",
        "projectSponsor": "Swroop Sahota",
        "description": "Halogen Moisture Analyzer (HMA) replacing the traditional loss on drying (LOD) testing on raw material (SM). ",
        "expense": 25975.4,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "The purpose of this project is to implement rapid moisture analysis to replace traditional loss-on-drying test (LOD) in a JSCQ Lab that will be determined in 2021.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE - JSCQ lab rapid  technology  (HMA) implementation (SM)",
        "projectId": "JSC-0045579",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Marzia Grassi,Bill Fouhy",
        "capital": 0,
        "initiative": "In-line Testing (BioTrak)",
        "functionalOwnership": "JSCQ - CoE Lab Operations",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 19000,
        "strategies": [
            "Operational Efficiencies",
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "11/2/25",
        "projectSponsor": "Swroop Sahota",
        "description": "In-line testing of viable air during aseptic production (PAT) in Schaffhausen to reduce/remove off-line testing and to support accelerated release of sterile products. \n\nJuly 29>added 9K$ to support the development in DPDS",
        "expense": 9445.6,
        "bamAllignment": "80% Automated QC and Product Release",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "By implementing the in-line PAT testing the goal is to reduce or even eliminate the traditional air monitoring based on the data gathered. An implementation strategy for isolators in Schaffhausen  will be developed.",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP22 - AC CoE -In-line testing (BioTrak) of viable air during aseptic production",
        "projectId": "JSC-0045618",
        "startDate": "2/17/21"
    },
    {
        "rpaValueScore": "TBD",
        "projectManager": "Christian Dubs",
        "capital": 421000,
        "initiative": "JSCQ Transformational Quality",
        "functionalOwnership": "JSCQ - Transformational Quality",
        "involvedTechnologyOrSystem": "TBD",
        "totalProjectValue": 2145000,
        "strategies": [
            "Internal Quality Support",
            "Data & Analytics"
        ],
        "endDate": "9/14/23",
        "projectSponsor": "Swroop Sahota",
        "description": "Create insights into the performance of Quality across sites by standardizing reports and metrics. Reports will be auto generated to enable us to dedicate more time to value adding work.  ",
        "expense": 40000,
        "bamAllignment": "100% Integrated Data",
        "janssenOneAccelerator": "Show graphic, no linkage",
        "businessObjectivesOrExpectations": "Increase information availability real-time  Improve data driven decision making  Improve reliability/reduce human errors  Harmonize/standardize dashboards and metrics across sites  Reduce time required to prepare reports with a potential to increase efficiency",
        "qualityEnabler": "Default to Accelerators",
        "investmentType": "Strategic",
        "resourceRequired": "TBD",
        "projectName": "BP21 - JSCQ Transformational Quality - _QuantifytheStateofQuality",
        "projectId": "JSC-0099481",
        "startDate": "6/30/21"
    }
];


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
        let totalProjectsCost = initiatives.reduce(function (acc, obj) { return acc + obj.totalProjectCost ? obj.totalProjectCost : 0; }, 0);
        result.push({ "name": element, "value": 1, "initiatives": initiatives.length, "totalProjectsCost": totalProjectsCost });

    });
    return result;
};

const getInitiatives = (rawData: any) => {
    let result: Array<string> = [];
    rawData.map((i: any) => {
        result = result.concat(i.initiative);
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
            seriesObj.id = entry.initIndex;
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
            seriesObj.projectManager = entry.projectManager;
            seriesObj.projectSponsor = entry.projectSponsor;
            seriesObj.projectName = entry.projectName;
            seriesObj.businessObjectivesRelational = entry.businessObjectivesOrExpectations,
                seriesObj.function = [];
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
            chartDataSeries.push(seriesObj);
        });

    });
    return chartDataSeries;
};



console.log('qualityEnabler categories', categories);
let chartDataSeries: any = [];
const accelerators = [...new Set(rawData.map((i) => i.janssenOneAccelerator))];


function getInitiativeColor(init: string) {
    let entry = rawData.find(element => element.initiative === init) || { functionalOwnership: "n/a" };
    let match = owners.find(t => t.name === entry.functionalOwnership);
    if (match) {
        return match.fill;
    } else {
        return "blue";
    }
}

export {
    owners,
    accelerators,
    getCategories,
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
