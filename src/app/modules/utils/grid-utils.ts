import { AlarmsTypes } from 'src/app/app.model';

export function getRowClass(severityType):string {
    
    if (severityType === AlarmsTypes.MAJOR) {
        return 'major-alarm';
    } else if (severityType === AlarmsTypes.CRITICAL) {
        return 'critical-alarm'; 
    } else if (severityType === AlarmsTypes.MINOR) {
        return 'minor-alarm';
    } else {
        return 'warning-alarm';
    }
}