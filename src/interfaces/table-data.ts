export interface SecullumList {
  lista: List[];
  justificativas: Justification[];
  totais: Total[];
  opcoesCartaoPonto: ScheduleOptions;
}

export interface Justification {
  nomeAbreviado: string;
  nomeCompleto: string;
}

export interface List {
  id: number;
  data: Date;
  funcionarioNome: string;
  batidas: Schedule[];
  valores: Total[];
  saldo: string;
  situacao: number;
  registroPendente: boolean;
  existePeriodoEncerrado: boolean;
}

export interface Schedule {
  nome: BatidaNome;
  valor: string;
  valorOriginal: null | string;
  fonteDadosId: number | null;
  geolocalizacao: Geolocalizacao | null;
  ehRepP: boolean;
}

export interface Geolocalizacao {
  latitude: number;
  longitude: number;
  precisao: number;
  endereco: string;
  dataHora: Date;
}

export interface Total {
  nome: string;
  nomeOriginal: string;
  valor: string;
}

export interface ScheduleOptions {
  funcionarioId: number;
  exibirTermosMTB: boolean;
  exibirTotaisNoRodape: boolean;
  exibirMiniaturaDoHorario: boolean;
  exibirEventos: boolean;
  modoPaisagem: boolean;
  exibirJustificativas: boolean;
  justificativasPreenchidasUsuario: boolean;
  exibirLegendasJustificativas: boolean;
  colunasSelecionadasImpressao: string[];
}

export enum BatidaNome {
  Entrance1 = "Entrance 1",
  Entrance2 = "Entrance 2",
  Entrance3 = "Entrance 3",
  Entrance4 = "Entrance 4",
  Exit1 = "Exit 1",
  Exit2 = "Exit 2",
  Exit3 = "Exit 3",
  Exit4 = "Exit 4",
}

export const initialState: SecullumList = {
  lista: [],
  justificativas: [],
  totais: [],
  opcoesCartaoPonto: {
    funcionarioId: 0,
    exibirTermosMTB: false,
    exibirTotaisNoRodape: false,
    exibirMiniaturaDoHorario: false,
    exibirEventos: false,
    modoPaisagem: false,
    exibirJustificativas: false,
    justificativasPreenchidasUsuario: false,
    exibirLegendasJustificativas: false,
    colunasSelecionadasImpressao: [],
  },
};

const justificationInitialState: Justification = {
  nomeAbreviado: '',
  nomeCompleto: '',
};

const listInitialState: List = {
  id: 0,
  data: new Date(),
  funcionarioNome: '',
  batidas: [],
  valores: [],
  saldo: '',
  situacao: 0,
  registroPendente: false,
  existePeriodoEncerrado: false,
};

const scheduleInitialState: Schedule = {
  nome: BatidaNome.Entrance1,
  valor: '',
  valorOriginal: null,
  fonteDadosId: null,
  geolocalizacao: null,
  ehRepP: false,
};

const geolocalizacaoInitialState: Geolocalizacao = {
  latitude: 0,
  longitude: 0,
  precisao: 0,
  endereco: '',
  dataHora: new Date(),
};

const totalInitialState: Total = {
  nome: '',
  nomeOriginal: '',
  valor: '',
};

const scheduleOptionsInitialState: ScheduleOptions = {
  funcionarioId: 0,
  exibirTermosMTB: false,
  exibirTotaisNoRodape: false,
  exibirMiniaturaDoHorario: false,
  exibirEventos: false,
  modoPaisagem: false,
  exibirJustificativas: false,
  justificativasPreenchidasUsuario: false,
  exibirLegendasJustificativas: false,
  colunasSelecionadasImpressao: [],
};
