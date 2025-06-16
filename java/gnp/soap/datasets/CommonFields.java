package gnp.soap.datasets;

import gnp.soap.ArchivalInfo;
import gnp.soap.SpatioTemporalCoverage;
import gnp.soap.CitationInfo;
import gnp.soap.people.PersonDatasetRole;
import gnp.soap.ResponsibleParty;
import gnp.soap.FundingInfo;
import gnp.soap.Project;
import gnp.soap.DataLicense;
import gnp.soap.RelatedDatasets;
import gnp.soap.ProvenanceInfo;
import gnp.soap.util.VariableFieldDefaults;

public class CommonFields {

	private ArchivalInfo archival;

	private SpatioTemporalCoverage dataCoverage;

	private CitationInfo citation;

	private PersonDatasetRole people[];

	private ResponsibleParty responsible[];

	private FundingInfo funding;

	private Project researchProjects[];

	private DataLicense license;

	private RelatedDatasets relatedDatasets;

	private ProvenanceInfo provenance;

	private VariableFieldDefaults defaults;

}
