export interface Menu {
    name: string,
    code: string
}
  
export enum AlarmsTypes {
    CRITICAL = 'CRITICAL',
    MAJOR = 'MAJOR',
    MINOR = 'MINOR',
    CRITICALCOLOR = '#e71d1d',
    MAJORCOLOR = '#ef8e00',
    MINORCOLOR = '#ddd326'
}

export interface Alarm {
    rollback: boolean,
    description: string,
    resource: string,
    nodeType: string,
    clearable: boolean,
    severityValue: string,
    raiseTime: string,
    severity: string,
    id: string,
    state: string,
}