import * as tailwindcss_types_config from 'tailwindcss/types/config';

declare const desingSystem: {
    handler: tailwindcss_types_config.PluginCreator;
    config?: Partial<tailwindcss_types_config.Config> | undefined;
};

export { desingSystem };
