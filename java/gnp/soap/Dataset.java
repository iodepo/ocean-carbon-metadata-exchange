package gnp.soap;

import gnp.soap.datasets.DatasetClass;
import gnp.soap.datasets.CreditedOrganization;
import gnp.soap.variables.DataVariable;
import gnp.soap.datasets.DatasetContact;
import gnp.soap.datasets.RelatedPublications;
import gnp.soap.people.Person;
import gnp.soap.people.PersonDatasetRole;
import gnp.soap.util.VariableFieldDefaults;
import gnp.soap.util.Reference;

public class Dataset {

	private SpatioTemporalCoverage spatioTemporalCoverage;

	private RelatedDatasets relatedDatasets;

	private CitationInfo citationInfo;

	private DataLicense dataLicense;

	private FundingInfo fundingInfo;

	private ArchivalInfo archivalInfo;

	private DatasetClass datasetClass;

	private Variable variable;

	private CreditedOrganization creditedOrganization;

	private DataVariable dataVariable;

	private DatasetContact datasetContact;

	private RelatedPublications relatedPublications;

	private ProvenanceInfo provenanceInfo;

	private ResponsibilityRole responsibilityRole;

	private PersonDatasetRole personDatasetRole;

	private VariableFieldDefaults variableFieldDefaults;

	private Reference publicationReferences;

	private Publications publications;

}
