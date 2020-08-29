import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// TODO; temporary until this is fixed in Dayjs to take into account the new strict parmater
export type Dayjs = (date?: dayjs.ConfigType, option?: dayjs.OptionType, strict?: boolean) => dayjs.Dayjs;

dayjs.extend(customParseFormat);

export default dayjs as Dayjs;
