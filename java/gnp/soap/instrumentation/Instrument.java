package gnp.soap.instrumentation;

import gnp.soap.instrumentation.calibration.Calibration;

public abstract class Instrument extends InstrumentSource {

	private String manufacturer;

	private String model;

	private String serialNumber;

	private String description;

	private Calibration calibration;

}
