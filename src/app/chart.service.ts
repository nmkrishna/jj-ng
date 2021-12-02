import { Injectable } from '@angular/core';

import { rawData } from './chart/chartdata';
@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  chartBaseUrl =
    'https://polar-coast-48800.herokuapp.com/reports/prepare/johnson/chart/';

  async getChartData(
    fileName: string = 'J%26J-POC-with-actual-data.xlsx'
  ): Promise<any> {
    try {
      const jsonData = await fetch(`${this.chartBaseUrl}${fileName}`).then(
        (data) => data.json()
      );
      return jsonData.body;
    } catch (error) {
      console.log('chart fetch error', error);
      // return [
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Upgrade operating model',
      //     initiative:
      //       'Quality operating model, process, and quality system (for BCMA CAR-T)',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description:
      //       'Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Huimin Yuan',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: '',
      //     investmentType: '',
      //     projectManager: '',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Upgrade operating model',
      //     initiative:
      //       'Quality operating model, process, and quality system (for Vaccines)',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM/JSCQ/BRQC',
      //     projectLead: 'Huiming Yuan/ ??',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Upgrade operating model',
      //     initiative: 'Quality operating model upgrade Digital Health',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'R. Famiglietti',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$2.3MM',
      //     totalProjectValue: '$2.4MM',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Upgrade operating model',
      //     initiative:
      //       'Quality Frame Work, operating model, quality system and phase appropriate GMP supporting DPDS',
      //     strategies: ['Operational Efficiencies', 'Internal Quality Support'],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Brenda Van Assche',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Upgrade operating model',
      //     initiative:
      //       'Support Product Segmentation by driving Fit for purpose quality framework design and implementation (e.g. POLO, Risk management for late stage products, Delist/divest processes, etc.)',
      //     strategies: ['Operational Efficiencies', 'Internal Quality Support'],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Angela Costantino',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Select for Success',
      //     qualityEnabler: 'Q&C expertise specific to new modalities ',
      //     initiative:
      //       'Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description: '#N/A',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Huimin Yuan/Amit Khaolkar/Lisa Forian',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Faster innovation speed and approvals',
      //     initiative: 'xSector R&D operating model (Fit for purpose QMS)',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description:
      //       'Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Faster innovation speed and approvals',
      //     initiative:
      //       'Support Best product at launch (BPAL) by driving quality framework to strike the balance of speed, cost, and long term LCM needs',
      //     strategies: ['Operational Efficiencies', 'Internal Quality Support'],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Lisa Forian / Huimin Yuan',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Faster innovation speed and approvals',
      //     initiative:
      //       'Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM',
      //     strategies: [
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Data & Analytics',
      //     ],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Matt Matuszewski',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative: 'Patient consumer quality',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description:
      //       'Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an "inventory". A playbook is available online on how to get access to the inventory.',
      //     functionalOwnership: 'Janssen BQ',
      //     projectLead: 'Yuderki Tejada-Flotta',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative:
      //       'Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //     ],
      //     description: '#N/A',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Renee Nester',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative: 'CXE',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description: '#N/A',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: 'Art Caruso',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative: 'Combination Product Process Improvements',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description: 'tbd',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Amit Khanolkar',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative: 'AcceleRRAte',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ',
      //     functionalOwnership: 'Janssen BQ',
      //     projectLead: 'Yuderki Tejada-Flotta',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$1.44MM',
      //     totalProjectValue: 'Yearly savings 2022+: $ 560K',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Design for Access',
      //     qualityEnabler: 'Contribute with integrated customer insights',
      //     initiative: 'Real World Evidence: Complaints Insights / Escalation',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description: '#N/A',
      //     functionalOwnership: 'Janssen BQ',
      //     projectLead: 'Kate Gillespie',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: 'Yearly savings 2022+: $ 750 K',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Drive the Debate',
      //     qualityEnabler: 'Lead and enable proactive dialogue',
      //     initiative: 'Ongoing dialogue',
      //     strategies: ['Partner Ecosystem'],
      //     description: '#N/A',
      //     functionalOwnership: 'n/a',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Drive the Debate',
      //     qualityEnabler: 'Lead and enable proactive dialogue',
      //     initiative:
      //       'Systematic and holistic orchestration of dialogues with external stakeholders (e.g. industry and regulatory forums)',
      //     strategies: ['Partner Ecosystem'],
      //     description: '#N/A',
      //     functionalOwnership: 'n/a',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Drive the Debate',
      //     qualityEnabler: 'Particpate in flagship collaborations',
      //     initiative: 'Design and lead flagship collaboration projects ',
      //     strategies: ['Partner Ecosystem'],
      //     description: '#N/A',
      //     functionalOwnership: 'n/a',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Drive the Debate',
      //     qualityEnabler: 'Particpate in flagship collaborations',
      //     initiative:
      //       'Systematic orchestration of new collaboration types tailored to stakeholder groups and purpose',
      //     strategies: ['Partner Ecosystem'],
      //     description: '#N/A',
      //     functionalOwnership: 'n/a',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Build expertise in analytics use cases',
      //     initiative: 'SCAN',
      //     strategies: ['Data & Analytics', 'Intelligent Automation'],
      //     description:
      //       'Data and Analytics initiative that deals with identifying the right way to use and collect data in order to make quality decisions. Uses cases have been identified in NC reduction, Speed to market increase and a higher reliability. Primary goal is to prevent issues from arising instead of applying corrective actions.',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Borke Van Belle',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '13.4MM',
      //     totalProjectValue:
      //       '18MM in CIP savings across Quality and MTO (reduced cycle times, investigation time and scrap increased yield); investment split still being determined.  ',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Build expertise in analytics use cases',
      //     initiative: 'Technology & Data Savviness in Quality DnA',
      //     strategies: ['Skillset', 'Culture of innovation'],
      //     description:
      //       'Build internal capability to create and deploy technology and automation solutions, and to evolve from descriptive analytics to advanced analytics',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Borke Van Belle',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '1MM',
      //     totalProjectValue:
      //       'investment to build capabilities not ROI expected ',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Build expertise in analytics use cases',
      //     initiative: 'Integrated Quality Plans (R&D)',
      //     strategies: ['Data & Analytics', 'Intelligent Automation'],
      //     description:
      //       'Become more proactive in oder to identify where risks lie by predicting risks before they happen using external insights and based on changes in regulatory environments. Share risk approach with authorities ("de-risk submissions").',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Establish enhanced CSV capabilities',
      //     initiative:
      //       'Lead CSV innovation, e.g. Through collaboration with CSA program',
      //     strategies: [
      //       'Skillset',
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //     ],
      //     description: '#N/A',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Structure quality-related data ecosystem',
      //     initiative: 'Common Data Layer (CDL)',
      //     strategies: ['Data & Analytics'],
      //     description:
      //       'Scalable, flexible & extensible data store - single version of the truth.\nEasily searchable and  provides the right information when it is needed',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Structure quality-related data ecosystem',
      //     initiative: 'BRQC Data Strategy and Foundation',
      //     strategies: ['Data & Analytics'],
      //     description: '#N/A',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Structure quality-related data ecosystem',
      //     initiative:
      //       'PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)',
      //     strategies: [
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'Initiative that aims to create one single source of truth for all product quality management related documents and information',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'David Enck',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: 'XX',
      //     totalProjectValue: 'accumatively XX FTE by 2026',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Structure quality-related data ecosystem',
      //     initiative: 'Design control platforming for devices',
      //     strategies: [],
      //     description: '',
      //     functionalOwnership: 'Janssen PQM',
      //     projectLead: 'Amit Khanolkar',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Analyze and Disrupt',
      //     qualityEnabler: 'Structure quality-related data ecosystem',
      //     initiative: 'BRQC Self-Service Analytics',
      //     strategies: [
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'Self-Service Analytics Interface for modern and holistic Performance Management',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Quality Systems Automation',
      //     strategies: [
      //       'Skillset',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Data & Analytics',
      //       'Intelligent Automation',
      //     ],
      //     description:
      //       'Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Next Gen QS',
      //     strategies: [
      //       'Skillset',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Data & Analytics',
      //       'Intelligent Automation',
      //     ],
      //     description:
      //       'Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'A. Pericone',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$28MM',
      //     totalProjectValue: '$50MM',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Quality Automation',
      //     strategies: ['Intelligent Automation'],
      //     description:
      //       'Quality Bots for transactional activities including remote work, Quality Oversight and full automation of Digital Batch Release. ',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Borke Van Belle',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '1.8MM',
      //     totalProjectValue: '$1.1MM savings and $4.1MM in avoidance ',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'TrackWise Upgrade',
      //     strategies: ['Operational Efficiencies', 'Internal Quality Support'],
      //     description: '',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'L. Hascher',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$3.5M',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'TrackWise Base Business Enhancements',
      //     strategies: ['Operational Efficiencies', 'Internal Quality Support'],
      //     description:
      //       'Annual charge to support priority enhancements, as defined in the backlog developed by the SUN.  Intent is to phase out funding as we migrate to Next Gen QS',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'O. Randon',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$1.6MM',
      //     totalProjectValue: '$0.2MM',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Pharma Segment QS Automation',
      //     strategies: [
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Intelligent Automation',
      //     ],
      //     description:
      //       "This is a placeholder for annual investments in high value use cases for SEGMENT-LEVEL QS Automation.  As an example, 2021 $ is exploring leverage of MD's RCA Efficiency IA tool, Consumer's Duplicate NC identification Tool (Mahjong) and the Shark-tank idea for use of WalkMe on TrackWise",
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'O. Randon',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$4.95MM',
      //     totalProjectValue: '$7.5MM',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'APR Scheduling and Efficiencies',
      //     strategies: [
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'Project is currently deploying a schedulign tool for APRs in Pharma and Consumer.  Not only will this improve compliance, but will enable an E2E view for products.  Secondary focus is to deploy standard reporting tool (Tableau) to standardize and automate APR report generation.  Cost saving driven by reduction of contract resources currently assembling APRs',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'K. Bruhin',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$1.35MM',
      //     totalProjectValue: '$2.1MM',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Wearables Solutions',
      //     strategies: [
      //       'Culture of innovation',
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //     ],
      //     description: '',
      //     functionalOwnership: 'Janssen PQS',
      //     projectLead: 'O. Randon',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '$4.5M',
      //     totalProjectValue: '$5M',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'QuantifyTheStateOfQuality',
      //     strategies: ['Data & Analytics'],
      //     description:
      //       'Create insights into the performance of Quality across sites by standardizing reports and metrics. Reports will be auto generated to enable us to dedicate more time to value adding work.',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Borke Van Belle',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '2.9MM',
      //     totalProjectValue: '$850K in savings and $7.3MM in avoidance ',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'xSector Audit & Supplier Reliability',
      //     strategies: ['Intelligent Automation'],
      //     description:
      //       'Initiative focussing on how capabilities of Quality and Compliance as well as Audit can be transferred among the segments',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Supplier Reliability',
      //     strategies: [
      //       'Partner Ecosystem',
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Patient & Consumer Q',
      //       'Data & Analytics',
      //     ],
      //     description:
      //       'Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'Evolve',
      //     strategies: ['Intelligent Automation'],
      //     description:
      //       'Deals with complex E2E labelling process owned by the Regulatory Group. BQ supports the process to improve it from a quality standpoint in a cross-functional governance.',
      //     functionalOwnership: 'Janssen BQ',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler: 'Smart quality assurance processes',
      //     initiative: 'On Demand Trainings (Pull vs. Push)',
      //     strategies: ['Skillset', 'Culture of innovation'],
      //     description:
      //       'Initiative to create self-service / on-demand learning opportunities instead of pushing / forcing regular trainings',
      //     functionalOwnership: 'Janssen BRQC',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler:
      //       'Optimized, automated, and distributed quality control',
      //     initiative: 'Digital Product Release ',
      //     strategies: ['Data & Analytics', 'Intelligent Automation'],
      //     description: '#N/A',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '735K',
      //     totalProjectValue: '990K in savings and 450K in cost avoidance ',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler:
      //       'Optimized, automated, and distributed quality control',
      //     initiative: 'Integrated Quality',
      //     strategies: ['Data & Analytics', 'Intelligent Automation'],
      //     description:
      //       'For Small and Large Molecules: Deploy real time release testing through real time quality analytics, real time analytical tests. Reduce the cost of quality, gain efficiencies, reduce WIP via enabling real time release at launch and by converting life cycle products. \nDevelop an E2E Real Time Quality and Release Testing infrastructure',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Stefan Bouckard ',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost:
      //       'approximately 2MM investment annually for Quality ',
      //     totalProjectValue: 'TBD',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler:
      //       'Optimized, automated, and distributed quality control',
      //     initiative: 'Transform Analytical Testing (Lab technology Roadmap) ',
      //     strategies: [
      //       'Operational Efficiencies',
      //       'Internal Quality Support',
      //       'Data & Analytics',
      //     ],
      //     description: '',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Hilde Druyts',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '13.6MM ',
      //     totalProjectValue:
      //       '9,5MM savings +10,1MM inventory + 0,3MM avoidance',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Compete for Patients',
      //     qualityEnabler:
      //       'Optimized, automated, and distributed quality control',
      //     initiative: 'Transforming the lab execution ( Ilabs, SMART QA QC) ',
      //     strategies: ['Intelligent Automation'],
      //     description:
      //       'Program covering multiple elements such as Paperless Labs and Lab systems  automate and streamline lab sites',
      //     functionalOwnership: 'Janssen SCQ',
      //     projectLead: 'Hilde Druyts',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '20.8 MM',
      //     totalProjectValue:
      //       '12MM savings + 1MM avoidance +10MM inventory reduction',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Across Accelerators',
      //     qualityEnabler: 'Capability building & Change Mgmt',
      //     initiative: 'People',
      //     strategies: ['Skillset', 'Culture of innovation'],
      //     description:
      //       'Create a bold and transformed Q&C organization that focuses on the capabilities, development and the culture needed for a prepared and inspired future workforce.',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Across Accelerators',
      //     qualityEnabler: 'Create one common data lake',
      //     initiative: 'Data Strategy & Foundation',
      //     strategies: ['Patient & Consumer Q', 'Data & Analytics'],
      //     description:
      //       'Ensure that high-quality data is available when needed to empower process automation, predict and prevent problems, drive higher quality and greater productivity and fuel our capability in data science and intelligent automation.',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Across Accelerators',
      //     qualityEnabler: 'Build mutually beneficial partnerships',
      //     initiative: 'Trusted Partnerships',
      //     strategies: ['Partner Ecosystem'],
      //     description:
      //       'Establish a framework with the right-sized toolkit to align on mutually beneficial goals, strategies and outcomes.',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Across Accelerators',
      //     qualityEnabler: 'Modernize IT infrasctructure',
      //     initiative: 'Modernize Digital Core (ERP)',
      //     strategies: ['Data & Analytics'],
      //     description: 'Modernize the current Pharm ERP landscape',
      //     functionalOwnership: 'Enterprise Q&C',
      //     projectLead: '',
      //     bamAlignment: 'TBD',
      //     rpaValueScore: 'TBD',
      //     investmentType: 'TBD',
      //     projectManager: 'TBD',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      //   {
      //     janssenOneAccelerator: 'Across Accelerators',
      //     qualityEnabler: 'Modernize IT infrasctructure',
      //     initiative: '',
      //     strategies: [],
      //     description: '',
      //     functionalOwnership: '',
      //     projectLead: '',
      //     bamAlignment: '',
      //     rpaValueScore: '',
      //     investmentType: '',
      //     projectManager: '',
      //     projectScore: null,
      //     involvedTechnology_system: '',
      //     resourceRequirement: '',
      //     potentialRisk: '',
      //     totalProjectCost: '',
      //     totalProjectValue: '',
      //     roi: '',
      //   },
      // ];
      return [
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Skillset",
            "start0": 0,
            "end0": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Culture of innovation",
            "start0": 1,
            "end0": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Partner Ecosystem",
            "start0": 2,
            "end0": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Operational Efficiencies",
            "start0": 3,
            "end0": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Internal Quality Support",
            "start0": 4,
            "end0": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for BCMA CAR-T)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Patient & Consumer Q",
            "start0": -1,
            "end0": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM",
            "investmentType": "",
            "potentialRisk": "",
            "description": "Define a new fit-for-purpose operating model adjusted to new modalities such as COVID-19, CAR-T (personalized products), cell & gene therapy, radiopharmaceuticals etc. Align operating model to key partners across PQ, Value Chain Management (VCM), DPDS, and Vaccines.",
            "projectLead": "Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Skillset",
            "start1": 0,
            "end1": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Culture of innovation",
            "start1": 1,
            "end1": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Partner Ecosystem",
            "start1": 2,
            "end1": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Operational Efficiencies",
            "start1": 3,
            "end1": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Internal Quality Support",
            "start1": 4,
            "end1": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model, process, and quality system (for Vaccines)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Patient & Consumer Q",
            "start1": -1,
            "end1": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM/JSCQ/BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Huiming Yuan/ ??",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Skillset",
            "start2": 0,
            "end2": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Culture of innovation",
            "start2": 1,
            "end2": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Partner Ecosystem",
            "start2": 2,
            "end2": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Operational Efficiencies",
            "start2": 3,
            "end2": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Internal Quality Support",
            "start2": 4,
            "end2": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Patient & Consumer Q",
            "start2": -1,
            "end2": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality operating model upgrade Digital Health",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Data & Analytics",
            "start2": 6,
            "end2": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "With digital health solutions increasing within Janssen in recent years, and with the regulatory environment becoming more complex, we have an opportunity to support our business partners in navigating the digital health landscape with agility to drive quality and compliance in our solutions. The goal of our multi-phase program is to enable business and technology innovation by empowering teams to move with agility in delivering compliant digital health solutions through a simplified and clearly defined framework.",
            "projectLead": "R. Famiglietti",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Frame Work, operating model, quality system and phase appropriate GMP supporting DPDS",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Operational Efficiencies",
            "start3": 3,
            "end3": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Brenda Van Assche",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Frame Work, operating model, quality system and phase appropriate GMP supporting DPDS",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Internal Quality Support",
            "start3": 4,
            "end3": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Brenda Van Assche",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Support Product Segmentation by driving Fit for purpose quality framework design and implementation (e.g. POLO, Risk management for late stage products, Delist/divest processes, etc.)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Operational Efficiencies",
            "start4": 3,
            "end4": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Angela Costantino",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Support Product Segmentation by driving Fit for purpose quality framework design and implementation (e.g. POLO, Risk management for late stage products, Delist/divest processes, etc.)",
            "qualityEnabler": "Upgrade operating model",
            "strategy": "Internal Quality Support",
            "start4": 4,
            "end4": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Angela Costantino",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
            "qualityEnabler": "Q&C expertise specific to new modalities ",
            "strategy": "Culture of innovation",
            "start5": 1,
            "end5": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
            "qualityEnabler": "Q&C expertise specific to new modalities ",
            "strategy": "Partner Ecosystem",
            "start5": 2,
            "end5": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
            "qualityEnabler": "Q&C expertise specific to new modalities ",
            "strategy": "Operational Efficiencies",
            "start5": 3,
            "end5": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
            "qualityEnabler": "Q&C expertise specific to new modalities ",
            "strategy": "Internal Quality Support",
            "start5": 4,
            "end5": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality framework and capability for new modalities development (e.g. cell & gene therapy and radiopharmaceuticals) and New Device Techonlogies (e.g. Patch, Pump/OBDS, TARIS) ",
            "qualityEnabler": "Q&C expertise specific to new modalities ",
            "strategy": "Patient & Consumer Q",
            "start5": -1,
            "end5": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Huimin Yuan/Amit Khaolkar/Lisa Forian",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector R&D operating model (Fit for purpose QMS)",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Culture of innovation",
            "start6": 1,
            "end6": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector R&D operating model (Fit for purpose QMS)",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Partner Ecosystem",
            "start6": 2,
            "end6": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector R&D operating model (Fit for purpose QMS)",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Operational Efficiencies",
            "start6": 3,
            "end6": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector R&D operating model (Fit for purpose QMS)",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Internal Quality Support",
            "start6": 4,
            "end6": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector R&D operating model (Fit for purpose QMS)",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Patient & Consumer Q",
            "start6": -1,
            "end6": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Global cross-segment (MD, Pharm, Consumer) innovation initiative to combine products and developt across sectors. xSector QMS is needed to further advance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Support Best product at launch (BPAL) by driving quality framework to strike the balance of speed, cost, and long term LCM needs",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Operational Efficiencies",
            "start7": 3,
            "end7": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Lisa Forian / Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Support Best product at launch (BPAL) by driving quality framework to strike the balance of speed, cost, and long term LCM needs",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Internal Quality Support",
            "start7": 4,
            "end7": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Lisa Forian / Huimin Yuan",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Operational Efficiencies",
            "start8": 3,
            "end8": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Matt Matuszewski",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Internal Quality Support",
            "start8": 4,
            "end8": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Matt Matuszewski",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead Pharma Proactive Risk Management to advance pipeline product and effective LCM",
            "qualityEnabler": "Faster innovation speed and approvals",
            "strategy": "Data & Analytics",
            "start8": 6,
            "end8": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Matt Matuszewski",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Skillset",
            "start9": 0,
            "end9": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start9": 1,
            "end9": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start9": 2,
            "end9": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start9": 3,
            "end9": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start9": 4,
            "end9": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Patient consumer quality",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start9": -1,
            "end9": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Develop patient centricity mindset to focus all activities on the patient. In this initiative, tools and technologies are linked to serve as an \"inventory\". A playbook is available online on how to get access to the inventory.",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Skillset",
            "start10": 0,
            "end10": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start10": 1,
            "end10": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start10": 2,
            "end10": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start10": 3,
            "end10": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start10": 4,
            "end10": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Develop insights to enhance Customer Experience and integrate into product development (to replace Voice of the customer)",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start10": -1,
            "end10": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Renee Nester",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Skillset",
            "start11": 0,
            "end11": 1,
            "topStrategy": "Skillset",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start11": 1,
            "end11": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start11": 2,
            "end11": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start11": 3,
            "end11": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start11": 4,
            "end11": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start11": -1,
            "end11": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "CXE",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Data & Analytics",
            "start11": 6,
            "end11": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Art Caruso",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start12": 1,
            "end12": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start12": 2,
            "end12": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start12": 3,
            "end12": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start12": 4,
            "end12": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start12": -1,
            "end12": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Combination Product Process Improvements",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Data & Analytics",
            "start12": 6,
            "end12": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "tbd",
            "projectLead": "Amit Khanolkar",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start13": 1,
            "end13": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start13": 2,
            "end13": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start13": 3,
            "end13": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start13": 4,
            "end13": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start13": -1,
            "end13": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "AcceleRRAte",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Data & Analytics",
            "start13": 6,
            "end13": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Implement process automation for the Central PV HUB verification processes and an integrated intake and workflow solution for end-to-end management of PSP and RWE activities.  Once fully deployed, the solutions will enable more efficient verification processes and a consistent approach to PSP/RWE activities set up and oversight by providing insights on individual RRA risk and overall compliance. ",
            "projectLead": "Yuderki Tejada-Flotta",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Culture of innovation",
            "start14": 1,
            "end14": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Partner Ecosystem",
            "start14": 2,
            "end14": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Operational Efficiencies",
            "start14": 3,
            "end14": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Internal Quality Support",
            "start14": 4,
            "end14": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Patient & Consumer Q",
            "start14": -1,
            "end14": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Real World Evidence: Complaints Insights / Escalation",
            "qualityEnabler": "Contribute with integrated customer insights",
            "strategy": "Data & Analytics",
            "start14": 6,
            "end14": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "Kate Gillespie",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Ongoing dialogue",
            "qualityEnabler": "Lead and enable proactive dialogue",
            "strategy": "Partner Ecosystem",
            "start15": 2,
            "end15": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "n/a",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Systematic and holistic orchestration of dialogues with external stakeholders (e.g. industry and regulatory forums)",
            "qualityEnabler": "Lead and enable proactive dialogue",
            "strategy": "Partner Ecosystem",
            "start16": 2,
            "end16": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "n/a",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Design and lead flagship collaboration projects ",
            "qualityEnabler": "Particpate in flagship collaborations",
            "strategy": "Partner Ecosystem",
            "start17": 2,
            "end17": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "n/a",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Systematic orchestration of new collaboration types tailored to stakeholder groups and purpose",
            "qualityEnabler": "Particpate in flagship collaborations",
            "strategy": "Partner Ecosystem",
            "start18": 2,
            "end18": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "n/a",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "SCAN",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Data & Analytics",
            "start19": 6,
            "end19": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Data and Analytics initiative that deals with identifying the right way to use and collect data in order to make quality decisions. Uses cases have been identified in NC reduction, Speed to market increase and a higher reliability. Primary goal is to prevent issues from arising instead of applying corrective actions.",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "SCAN",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Intelligent Automation",
            "start19": 7,
            "end19": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Data and Analytics initiative that deals with identifying the right way to use and collect data in order to make quality decisions. Uses cases have been identified in NC reduction, Speed to market increase and a higher reliability. Primary goal is to prevent issues from arising instead of applying corrective actions.",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Technology & Data Savviness in Quality DnA",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Skillset",
            "start20": 0,
            "end20": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Build internal capability to create and deploy technology and automation solutions, and to evolve from descriptive analytics to advanced analytics",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Technology & Data Savviness in Quality DnA",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Culture of innovation",
            "start20": 1,
            "end20": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Build internal capability to create and deploy technology and automation solutions, and to evolve from descriptive analytics to advanced analytics",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Integrated Quality Plans (R&D)",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Data & Analytics",
            "start21": 6,
            "end21": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Become more proactive in oder to identify where risks lie by predicting risks before they happen using external insights and based on changes in regulatory environments. Share risk approach with authorities (\"de-risk submissions\").",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Integrated Quality Plans (R&D)",
            "qualityEnabler": "Build expertise in analytics use cases",
            "strategy": "Intelligent Automation",
            "start21": 7,
            "end21": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Become more proactive in oder to identify where risks lie by predicting risks before they happen using external insights and based on changes in regulatory environments. Share risk approach with authorities (\"de-risk submissions\").",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead CSV innovation, e.g. Through collaboration with CSA program",
            "qualityEnabler": "Establish enhanced CSV capabilities",
            "strategy": "Skillset",
            "start22": 0,
            "end22": 1,
            "topStrategy": "Skillset",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead CSV innovation, e.g. Through collaboration with CSA program",
            "qualityEnabler": "Establish enhanced CSV capabilities",
            "strategy": "Culture of innovation",
            "start22": 1,
            "end22": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Lead CSV innovation, e.g. Through collaboration with CSA program",
            "qualityEnabler": "Establish enhanced CSV capabilities",
            "strategy": "Partner Ecosystem",
            "start22": 2,
            "end22": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Common Data Layer (CDL)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Data & Analytics",
            "start23": 6,
            "end23": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Scalable, flexible & extensible data store - single version of the truth.\nEasily searchable and  provides the right information when it is needed",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Data Strategy and Foundation",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Data & Analytics",
            "start24": 6,
            "end24": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Partner Ecosystem",
            "start25": 2,
            "end25": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
            "projectLead": "David Enck",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Operational Efficiencies",
            "start25": 3,
            "end25": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
            "projectLead": "David Enck",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Internal Quality Support",
            "start25": 4,
            "end25": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
            "projectLead": "David Enck",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Patient & Consumer Q",
            "start25": -1,
            "end25": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
            "projectLead": "David Enck",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "PQM Work Center (such as Criticality Analysis, batch analysis, specification justification, stability e-reporting, product change control, escalation, …)",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Data & Analytics",
            "start25": 6,
            "end25": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQM",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims to create one single source of truth for all product quality management related documents and information",
            "projectLead": "David Enck",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Self-Service Analytics",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Partner Ecosystem",
            "start27": 2,
            "end27": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Self-Service Analytics",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Operational Efficiencies",
            "start27": 3,
            "end27": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Self-Service Analytics",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Internal Quality Support",
            "start27": 4,
            "end27": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Self-Service Analytics",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Patient & Consumer Q",
            "start27": -1,
            "end27": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "BRQC Self-Service Analytics",
            "qualityEnabler": "Structure quality-related data ecosystem",
            "strategy": "Data & Analytics",
            "start27": 6,
            "end27": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Self-Service Analytics Interface for modern and holistic Performance Management",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Skillset",
            "start28": 0,
            "end28": 1,
            "topStrategy": "Skillset",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Partner Ecosystem",
            "start28": 2,
            "end28": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start28": 3,
            "end28": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start28": 4,
            "end28": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Data & Analytics",
            "start28": 6,
            "end28": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Systems Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start28": 7,
            "end28": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Identify, support and promote intelligent automation by developing a framework, coordinating across segments and functions and establishing an organic process to learn and leverage as we increase deployment and adoption across Q&C.\n",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Skillset",
            "start29": 0,
            "end29": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Partner Ecosystem",
            "start29": 2,
            "end29": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start29": 3,
            "end29": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start29": 4,
            "end29": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Data & Analytics",
            "start29": 6,
            "end29": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Next Gen QS",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start29": 7,
            "end29": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative that aims at digitizing, streamlining and simplifying E2E quality systems with the following vision: “Delivering a digital, data driven and fully seamless experience to our Quality Users.”",
            "projectLead": "A. Pericone",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Quality Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start30": 7,
            "end30": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Quality Bots for transactional activities including remote work, Quality Oversight and full automation of Digital Batch Release. ",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "TrackWise Upgrade",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start31": 3,
            "end31": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "L. Hascher",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "TrackWise Upgrade",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start31": 4,
            "end31": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "L. Hascher",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "TrackWise Base Business Enhancements",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start32": 3,
            "end32": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Annual charge to support priority enhancements, as defined in the backlog developed by the SUN.  Intent is to phase out funding as we migrate to Next Gen QS",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "TrackWise Base Business Enhancements",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start32": 4,
            "end32": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Annual charge to support priority enhancements, as defined in the backlog developed by the SUN.  Intent is to phase out funding as we migrate to Next Gen QS",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Pharma Segment QS Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start33": 3,
            "end33": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "This is a placeholder for annual investments in high value use cases for SEGMENT-LEVEL QS Automation.  As an example, 2021 $ is exploring leverage of MD's RCA Efficiency IA tool, Consumer's Duplicate NC identification Tool (Mahjong) and the Shark-tank idea for use of WalkMe on TrackWise",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Pharma Segment QS Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start33": 4,
            "end33": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "This is a placeholder for annual investments in high value use cases for SEGMENT-LEVEL QS Automation.  As an example, 2021 $ is exploring leverage of MD's RCA Efficiency IA tool, Consumer's Duplicate NC identification Tool (Mahjong) and the Shark-tank idea for use of WalkMe on TrackWise",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Pharma Segment QS Automation",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start33": 7,
            "end33": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "This is a placeholder for annual investments in high value use cases for SEGMENT-LEVEL QS Automation.  As an example, 2021 $ is exploring leverage of MD's RCA Efficiency IA tool, Consumer's Duplicate NC identification Tool (Mahjong) and the Shark-tank idea for use of WalkMe on TrackWise",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "APR Scheduling and Efficiencies",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start34": 3,
            "end34": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Project is currently deploying a schedulign tool for APRs in Pharma and Consumer.  Not only will this improve compliance, but will enable an E2E view for products.  Secondary focus is to deploy standard reporting tool (Tableau) to standardize and automate APR report generation.  Cost saving driven by reduction of contract resources currently assembling APRs",
            "projectLead": "K. Bruhin",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "APR Scheduling and Efficiencies",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start34": 4,
            "end34": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Project is currently deploying a schedulign tool for APRs in Pharma and Consumer.  Not only will this improve compliance, but will enable an E2E view for products.  Secondary focus is to deploy standard reporting tool (Tableau) to standardize and automate APR report generation.  Cost saving driven by reduction of contract resources currently assembling APRs",
            "projectLead": "K. Bruhin",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "APR Scheduling and Efficiencies",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Data & Analytics",
            "start34": 6,
            "end34": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Project is currently deploying a schedulign tool for APRs in Pharma and Consumer.  Not only will this improve compliance, but will enable an E2E view for products.  Secondary focus is to deploy standard reporting tool (Tableau) to standardize and automate APR report generation.  Cost saving driven by reduction of contract resources currently assembling APRs",
            "projectLead": "K. Bruhin",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Wearables Solutions",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Culture of innovation",
            "start35": 1,
            "end35": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Wearables Solutions",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Partner Ecosystem",
            "start35": 2,
            "end35": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Wearables Solutions",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start35": 3,
            "end35": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Wearables Solutions",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start35": 4,
            "end35": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen PQS",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "O. Randon",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "QuantifyTheStateOfQuality",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Data & Analytics",
            "start36": 6,
            "end36": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Create insights into the performance of Quality across sites by standardizing reports and metrics. Reports will be auto generated to enable us to dedicate more time to value adding work.",
            "projectLead": "Borke Van Belle",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "xSector Audit & Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start37": 7,
            "end37": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative focussing on how capabilities of Quality and Compliance as well as Audit can be transferred among the segments",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Partner Ecosystem",
            "start38": 2,
            "end38": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Operational Efficiencies",
            "start38": 3,
            "end38": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Internal Quality Support",
            "start38": 4,
            "end38": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Patient & Consumer Q",
            "start38": -1,
            "end38": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Supplier Reliability",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Data & Analytics",
            "start38": 6,
            "end38": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deliver an end-to-end supplier reliability ecosystem, ensuring that goods and services provided are of high quality, function as intended, are delivered on-time and provide high value. ",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Evolve",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Intelligent Automation",
            "start39": 7,
            "end39": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen BQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Deals with complex E2E labelling process owned by the Regulatory Group. BQ supports the process to improve it from a quality standpoint in a cross-functional governance.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "On Demand Trainings (Pull vs. Push)",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Skillset",
            "start40": 0,
            "end40": 1,
            "topStrategy": "Skillset",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative to create self-service / on-demand learning opportunities instead of pushing / forcing regular trainings",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "On Demand Trainings (Pull vs. Push)",
            "qualityEnabler": "Smart quality assurance processes",
            "strategy": "Culture of innovation",
            "start40": 1,
            "end40": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Janssen BRQC",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Initiative to create self-service / on-demand learning opportunities instead of pushing / forcing regular trainings",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Digital Product Release ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Data & Analytics",
            "start41": 6,
            "end41": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Digital Product Release ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Intelligent Automation",
            "start41": 7,
            "end41": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "#N/A",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Integrated Quality",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Data & Analytics",
            "start42": 6,
            "end42": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "For Small and Large Molecules: Deploy real time release testing through real time quality analytics, real time analytical tests. Reduce the cost of quality, gain efficiencies, reduce WIP via enabling real time release at launch and by converting life cycle products. \nDevelop an E2E Real Time Quality and Release Testing infrastructure",
            "projectLead": "Stefan Bouckard ",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Integrated Quality",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Intelligent Automation",
            "start42": 7,
            "end42": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "For Small and Large Molecules: Deploy real time release testing through real time quality analytics, real time analytical tests. Reduce the cost of quality, gain efficiencies, reduce WIP via enabling real time release at launch and by converting life cycle products. \nDevelop an E2E Real Time Quality and Release Testing infrastructure",
            "projectLead": "Stefan Bouckard ",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Transform Analytical Testing (Lab technology Roadmap) ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Operational Efficiencies",
            "start43": 3,
            "end43": 4,
            "topStrategy": "Operational Efficiencies",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Hilde Druyts",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Transform Analytical Testing (Lab technology Roadmap) ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Internal Quality Support",
            "start43": 4,
            "end43": 5,
            "topStrategy": "Internal Quality Support",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Hilde Druyts",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Transform Analytical Testing (Lab technology Roadmap) ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Data & Analytics",
            "start43": 6,
            "end43": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "",
            "projectLead": "Hilde Druyts",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Transforming the lab execution ( Ilabs, SMART QA QC) ",
            "qualityEnabler": "Optimized, automated, and distributed quality control",
            "strategy": "Intelligent Automation",
            "start44": 7,
            "end44": 8,
            "topStrategy": "Intelligent Automation",
            "owner": "Janssen SCQ",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Program covering multiple elements such as Paperless Labs and Lab systems  automate and streamline lab sites",
            "projectLead": "Hilde Druyts",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "People",
            "qualityEnabler": "Capability building & Change Mgmt",
            "strategy": "Skillset",
            "start45": 0,
            "end45": 1,
            "topStrategy": "Skillset",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Create a bold and transformed Q&C organization that focuses on the capabilities, development and the culture needed for a prepared and inspired future workforce.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "People",
            "qualityEnabler": "Capability building & Change Mgmt",
            "strategy": "Culture of innovation",
            "start45": 1,
            "end45": 2,
            "topStrategy": "Culture of innovation",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Create a bold and transformed Q&C organization that focuses on the capabilities, development and the culture needed for a prepared and inspired future workforce.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Data Strategy & Foundation",
            "qualityEnabler": "Create one common data lake",
            "strategy": "Patient & Consumer Q",
            "start46": -1,
            "end46": 0,
            "topStrategy": "Patient & Consumer Q",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Ensure that high-quality data is available when needed to empower process automation, predict and prevent problems, drive higher quality and greater productivity and fuel our capability in data science and intelligent automation.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Data Strategy & Foundation",
            "qualityEnabler": "Create one common data lake",
            "strategy": "Data & Analytics",
            "start46": 6,
            "end46": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Ensure that high-quality data is available when needed to empower process automation, predict and prevent problems, drive higher quality and greater productivity and fuel our capability in data science and intelligent automation.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Trusted Partnerships",
            "qualityEnabler": "Build mutually beneficial partnerships",
            "strategy": "Partner Ecosystem",
            "start47": 2,
            "end47": 3,
            "topStrategy": "Partner Ecosystem",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Establish a framework with the right-sized toolkit to align on mutually beneficial goals, strategies and outcomes.",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        },
        {
            "initiative": "Modernize Digital Core (ERP)",
            "qualityEnabler": "Modernize IT infrasctructure",
            "strategy": "Data & Analytics",
            "start48": 6,
            "end48": 7,
            "topStrategy": "Data & Analytics",
            "owner": "Enterprise Q&C",
            "investmentType": "TBD",
            "potentialRisk": "",
            "description": "Modernize the current Pharm ERP landscape",
            "projectLead": "",
            "projectName": "Integrated Quality",
            "businessObjectivesRelational": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "benfitsAndRationale": "",
            "function": [],
            "projectId": "JSC-0056633",
            "financials": {
                "capital": "$0",
                "expense": "$774,000"
            },
            "plannedStartDate": "01/Jan/22",
            "expireDate": "31/Jan/22",
            "carStatus": [
                "Not Yet Started",
                "Draft"
            ],
            "primaryJanssenOneAccesslerator": [
                "Complete For Patients"
            ],
            "affectedQCDimensions": [
                "Next Generation Quality"
            ],
            "bamAllignment": [
                "100% Digital QMS",
                "80% Automated QC and Product Release"
            ],
            "rpaValueScore": [
                "0.2"
            ],
            "resourceRequired": "2 FTE"
        }
    ];
    }
  }
}
