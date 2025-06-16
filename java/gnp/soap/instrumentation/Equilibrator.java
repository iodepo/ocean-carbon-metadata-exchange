package gnp.soap.instrumentation;

import gnp.soap.variables.EquilibratorType;

public class Equilibrator extends Instrument {

	private Number volume;

	private boolean vented;

	private Number waterFlowRate;

	private Number headspaceGasFlowRate;

	private Number equTempUncertainty;

	private Number totalPressureUncertainty;

	private String totalPressureCalculationMethod;

	private EquilibratorType equilibratorType;

	private Sensor equPresSensor;

	private Sensor equTempSensor;

}
