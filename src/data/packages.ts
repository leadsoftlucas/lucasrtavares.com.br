// Dados independentes de idioma, portados do index.html legado. Os textos ficam em src/i18n/*.ts (mesma ordem).

export type PackageCategory = 'core' | 'br' | 'cloud' | 'sec';

export interface NugetPackage {
  name: string;
  version: string;
  /** Downloads no NuGet, ja formatado (pt-BR). */
  downloads: string;
  category: PackageCategory;
  /** Repositorio em github.com/LeadSoft-Solucoes-Web, quando existe. */
  repo: string | null;
}

/** Na ordem das descricoes em i18n (packageDescriptions). */
export const packages: NugetPackage[] = [
  {
    name: 'LeadSoft.Common.Library',
    version: '10.0.5',
    downloads: '48.460',
    category: 'core',
    repo: 'leadsoft-library',
  },
  {
    name: 'LeadSoft.Common.GlobalDomain',
    version: '10.0.16',
    downloads: '41.474',
    category: 'core',
    repo: 'leadsoft-global-domain',
  },
  {
    name: 'LeadSoft.Common.DataAccess',
    version: '10.0.3',
    downloads: '24.498',
    category: 'core',
    repo: null,
  },
  {
    name: 'LeadSoft.Adapter.BrasilAPI',
    version: '10.0.5',
    downloads: '18.574',
    category: 'br',
    repo: 'leadsoft-adapter-brasilapi',
  },
  {
    name: 'LeadSoft.Adapter.ViaCep',
    version: '10.0.6',
    downloads: '16.993',
    category: 'br',
    repo: 'leadsoft-adapter-viacep',
  },
  {
    name: 'LeadSoft.Adapter.IBGE',
    version: '10.1.1',
    downloads: '16.382',
    category: 'br',
    repo: 'leadsoft-adapter-ibge',
  },
  {
    name: 'LeadSoft.Adapter.Email',
    version: '10.0.1',
    downloads: '5.242',
    category: 'sec',
    repo: null,
  },
  {
    name: 'LeadSoft.Adapter.RavenDBIdentity',
    version: '10.0.2',
    downloads: '2.370',
    category: 'sec',
    repo: null,
  },
  {
    name: 'LeadSoft.Adapter.Aws.SecretsManager',
    version: '10.1.7',
    downloads: '1.277',
    category: 'cloud',
    repo: 'leadsoft-adapter-aws',
  },
  {
    name: 'LeadSoft.Adapter.Azure.EntraID',
    version: '10.0.8',
    downloads: '1.206',
    category: 'cloud',
    repo: 'leadsoft-adapter-azure',
  },
  {
    name: 'LeadSoft.Adapter.Google.ReCaptcha',
    version: '10.2.8',
    downloads: '952',
    category: 'cloud',
    repo: 'leadsoft-adapter-google',
  },
  {
    name: 'LeadSoft.Adapter.Google.Workspace',
    version: '10.1.0',
    downloads: '723',
    category: 'cloud',
    repo: 'leadsoft-adapter-google',
  },
  {
    name: 'LeadSoft.Adapter.Aws.S3',
    version: '10.0.0',
    downloads: '154',
    category: 'cloud',
    repo: 'leadsoft-adapter-aws',
  },
];

export const packageCategoryOrder: Array<'all' | PackageCategory> = ['all', 'core', 'br', 'cloud', 'sec'];

export const nugetUrl = (name: string) => 'https://www.nuget.org/packages/' + name;
export const nugetIconUrl = (p: NugetPackage) =>
  'https://api.nuget.org/v3-flatcontainer/' + p.name.toLowerCase() + '/' + p.version + '/icon';
export const githubUrl = (repo: string) => 'https://github.com/LeadSoft-Solucoes-Web/' + repo;
