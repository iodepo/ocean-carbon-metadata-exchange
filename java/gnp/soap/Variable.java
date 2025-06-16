package gnp.soap;

import gnp.soap.util.UdUnits;
import gnp.soap.variables.CF_DSG_Type;
import gnp.soap.variables.QcInfo;
import gnp.soap.variables.VariableSource;

public class Variable {

	private String varNameInFile;

	private String description;

	private UdUnits units;

	private CF_DSG_Type v_geometry;

	/**
	 * Per variable or per dataset?
	 */
	private String v_missingValue;

	private String flagVarName;

	/**
	 * Per variable or per dataset?
	 */
	private String v_flaggingScheme;

	private NumericValue uncertainty;

	private String uncertaintyMethod;

	private QcInfo qcStepsApplied;

	/**
	 * Up to researcher to decide?
	 * Should this be enum
	 * Climate
	 * Weather
	 * Useless ?
	 */
	private boolean XX_climateQuality;

	private String methodDescription;

	private String methodReference;

	private VariableSource source;

}
