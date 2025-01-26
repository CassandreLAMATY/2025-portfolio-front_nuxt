export class Alert {
    public title: string;
    public content: string | null;
    public icon: string[];
    public type: 'info' | 'success' | 'warning' | 'danger';
    public timeout: number = 5000;
    public isActive?: boolean = true;

    constructor(title: string, type: 'info' | 'success' | 'warning' | 'danger', content: string | null = null) {
        this.title = title;
        this.type = type;
        this.content = content;
        this.icon = this.getIcon(type);
    }

    private getIcon(type: 'info' | 'success' | 'warning' | 'danger'): [string, string] {
        switch (type) {
            case 'success':
                return ['fas', 'circle-check'];
            case 'warning':
                return ['fas', 'triangle-exclamation'];
            case 'danger':
                return ['fas', 'skull-crossbones'];
            default:
                return ['fas', 'circle-info'];
        }
    }
}
