package gnp.soap.variables;

import gnp.soap.variables.source.OtherDataSource;
import gnp.soap.util.Reference;

public interface If_Calculated {

	public OtherDataSource sources;

	public String calculationMethod;

	public Reference methodReference;

	public NamedValueItem parameters;

}
