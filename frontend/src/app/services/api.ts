
// MOCK API
export async function apiGet<T>(
  _path: string,
  params?: Record<string, string | number>
): Promise<T> {
  // Simula dados de acordo com a tabela
  const table = params?.table as string;
  if (table === "hiragana") {
    // Tabela completa de hiragana gojuon + diacríticos básicos
    const gojuon = [
      ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
      ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
      ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
      ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
      ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
      ["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
      ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
      ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
      ["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
      ["わ", "wa"], ["を", "wo"], ["ん", "n"]
    ];
    // Exemplos simples
    const exemplos: Record<string, string> = {
      "あ": "あさ (manhã)", "い": "いぬ (cachorro)", "う": "うみ (mar)", "え": "えき (estação)", "お": "おにぎり (bolinho)",
      "か": "かさ (guarda-chuva)", "き": "き (árvore)", "く": "くるま (carro)", "け": "けむし (lagarta)", "こ": "こども (criança)"
    };
    return Promise.resolve({
      table: "hiragana",
      total: gojuon.length,
      data: gojuon.map(([caractere, romaji], i) => ({
        id: i + 1,
        caractere,
        romaji,
        grupo: romaji[0],
        tipo: "gojuon",
        examples: [exemplos[caractere] || "exemplo"]
      })),
    } as T);
  }
  if (table === "katakana") {
    // Katakana completo: gojuon, dakuten, handakuten, yoon (junções)
    const gojuon = [
      ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
      ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
      ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
      ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
      ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
      ["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"],
      ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
      ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"],
      ["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"],
      ["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]
    ];
    const dakuten = [
      ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
      ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
      ["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"],
      ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"]
    ];
    const handakuten = [
      ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"]
    ];
    // Yoon (junções)
    const yoon = [
      ["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"],
      ["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"],
      ["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"],
      ["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"],
      ["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"],
      ["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"],
      ["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"],
      ["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"],
      ["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"],
      ["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"],
      ["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]
    ];
    const exemplos: Record<string, string> = {
      "ア": "アイス (sorvete)", "イ": "イヌ (cachorro)", "ウ": "ウサギ (coelho)", "エ": "エビ (camarão)", "オ": "オレンジ (laranja)"
    };
    let idx = 0;
    const all = [
      ...gojuon.map(([caractere, romaji]) => ({
        id: ++idx,
        caractere,
        romaji,
        grupo: romaji[0],
        tipo: "letra",
        examples: [exemplos[caractere] || "exemplo"]
      })),
      ...dakuten.map(([caractere, romaji]) => ({
        id: ++idx,
        caractere,
        romaji,
        grupo: romaji[0],
        tipo: "dakuten",
        examples: ["exemplo dakuten"]
      })),
      ...handakuten.map(([caractere, romaji]) => ({
        id: ++idx,
        caractere,
        romaji,
        grupo: romaji[0],
        tipo: "handakuten",
        examples: ["exemplo handakuten"]
      })),
      ...yoon.map(([caractere, romaji]) => ({
        id: ++idx,
        caractere,
        romaji,
        grupo: romaji[0],
        tipo: "yoon",
        examples: ["exemplo yoon"]
      }))
    ];
    return Promise.resolve({
      table: "katakana",
      total: all.length,
      data: all,
    } as T);
  }
  if (table === "kanji") {
    // 100 principais kanji (exemplo simplificado)
   const kanjis = [
  // Números (já existentes)
  ["一", "ichi", "um",      "いち"],
  ["二", "ni",   "dois",    "に"],
  ["三", "san",  "três",    "さん"],
  ["四", "shi",  "quatro",  "し"],
  ["五", "go",   "cinco",   "ご"],
  ["六", "roku", "seis",    "ろく"],
  ["七", "shichi","sete",   "しち"],
  ["八", "hachi","oito",    "はち"],
  ["九", "kyuu", "nove",    "きゅう"],
  ["十", "juu",  "dez",     "じゅう"],

  // Natureza / dias da semana (já existentes)
  ["人", "hito",  "pessoa",   "ひと"],
  ["日", "nichi", "dia / sol","にち"],
  ["月", "getsu", "mês / lua","げつ"],
  ["火", "ka",    "fogo",     "か"],
  ["水", "sui",   "água",     "すい"],
  ["木", "moku",  "árvore",   "もく"],
  ["金", "kin",   "ouro",     "きん"],
  ["土", "do",    "terra",    "ど"],
  ["山", "yama",  "montanha", "やま"],
  ["川", "kawa",  "rio",      "かわ"],

  // Números maiores
  ["百", "hyaku", "cem",     "ひゃく"],
  ["千", "sen",   "mil",     "せん"],
  ["万", "man",   "dez mil", "まん"],

  // Tempo
  ["年", "nen",   "ano",         "ねん"],
  ["時", "ji",    "hora",        "じ"],
  ["分", "fun",   "minuto",      "ふん"],
  ["週", "shuu",  "semana",      "しゅう"],
  ["今", "ima",   "agora",       "いま"],
  ["朝", "asa",   "manhã",       "あさ"],
  ["昼", "hiru",  "meio-dia",    "ひる"],
  ["夜", "yoru",  "noite",       "よる"],
  ["前", "mae",   "antes/frente","まえ"],
  ["後", "ato",   "depois/atrás","あと"],
  ["午", "go",    "meio (hora)", "ご"],

  // Família
  ["子", "ko",     "filho/criança",   "こ"],
  ["女", "onna",   "mulher",          "おんな"],
  ["男", "otoko",  "homem",           "おとこ"],
  ["父", "chichi", "pai",             "ちち"],
  ["母", "haha",   "mãe",             "はは"],
  ["兄", "ani",    "irmão mais velho","あに"],
  ["姉", "ane",    "irmã mais velha", "あね"],
  ["弟", "otouto", "irmão mais novo", "おとうと"],
  ["妹", "imouto", "irmã mais nova",  "いもうと"],
  ["友", "tomo",   "amigo",           "とも"],

  // Escola / estudo
  ["学", "gaku",    "estudar",        "がく"],
  ["校", "kou",     "escola",         "こう"],
  ["先", "sen",     "antes/mestre",   "せん"],
  ["生", "sei",     "vida/nascer",    "せい"],
  ["語", "go",      "idioma",         "ご"],
  ["書", "sho",     "escrever",       "しょ"],
  ["読", "doku",    "ler",            "どく"],
  ["話", "hanashi", "falar",          "はなし"],
  ["聞", "kiku",    "ouvir",          "きく"],
  ["見", "miru",    "ver",            "みる"],
  ["言", "iu",      "dizer",          "いう"],
  ["字", "ji",      "caractere",      "じ"],
  ["文", "bun",     "texto/frase",    "ぶん"],

  // Verbos / ações
  ["食", "shoku",  "comer",         "しょく"],
  ["飲", "nomu",   "beber",         "のむ"],
  ["行", "iku",    "ir",            "いく"],
  ["来", "kuru",   "vir",           "くる"],
  ["帰", "kaeru",  "voltar",        "かえる"],
  ["出", "deru",   "sair",          "でる"],
  ["入", "hairu",  "entrar",        "はいる"],
  ["買", "kau",    "comprar",       "かう"],
  ["使", "tsukau", "usar",          "つかう"],
  ["作", "tsukuru","fazer/criar",   "つくる"],
  ["休", "yasumu", "descansar",     "やすむ"],
  ["起", "okiru",  "acordar",       "おきる"],
  ["寝", "neru",   "dormir",        "ねる"],

  // Direções e posições
  ["上", "ue",     "cima",         "うえ"],
  ["下", "shita",  "baixo",        "した"],
  ["右", "migi",   "direita",      "みぎ"],
  ["左", "hidari", "esquerda",     "ひだり"],
  ["中", "naka",   "dentro/meio",  "なか"],
  ["外", "soto",   "fora",         "そと"],
  ["東", "higashi","leste",        "ひがし"],
  ["西", "nishi",  "oeste",        "にし"],
  ["南", "minami", "sul",          "みなみ"],
  ["北", "kita",   "norte",        "きた"],

  // Adjetivos
  ["大", "ookii",    "grande",        "おおきい"],
  ["小", "chiisai",  "pequeno",       "ちいさい"],
  ["高", "takai",    "alto/caro",     "たかい"],
  ["安", "yasui",    "barato/seguro", "やすい"],
  ["新", "atarashii","novo",          "あたらしい"],
  ["古", "furui",    "velho",         "ふるい"],
  ["長", "nagai",    "longo",         "ながい"],
  ["多", "ooi",      "muito/muitos",  "おおい"],
  ["少", "sukunai",  "pouco",         "すくない"],

  // Corpo humano
  ["手", "te",     "mão",      "て"],
  ["目", "me",     "olho",     "め"],
  ["耳", "mimi",   "ouvido",   "みみ"],
  ["口", "kuchi",  "boca",     "くち"],
  ["足", "ashi",   "pé/perna", "あし"],
  ["体", "karada", "corpo",    "からだ"],
  ["心", "kokoro", "coração",  "こころ"],
  ["頭", "atama",  "cabeça",   "あたま"],
];
    return Promise.resolve({
      table: "kanji",
      total: kanjis.length,
      data: kanjis.map(([caractere, romaji, significado, hiragana], i) => ({
        id: i + 1,
        caractere,
        romaji,
        significado,
        grupo: "básico",
        tipo: "básico",
        hiragana,
      })),
    } as T);
  }
  if (table === "numeros") {
    // Números de 1 a 100
    const kanjiNumeros = ["一","二","三","四","五","六","七","八","九","十"];
    const romajiNumeros = ["ichi","ni","san","shi","go","roku","shichi","hachi","kyuu","juu"];
    const hiraganaNumeros = ["いち","に","さん","し","ご","ろく","しち","はち","きゅう","じゅう"];
    const data = [];
    for (let i = 1; i <= 100; i++) {
      let japones = "";
      let hiragana = "";
      if (i <= 10) {
        japones = kanjiNumeros[i-1];
        hiragana = hiraganaNumeros[i-1];
      } else if (i < 20) {
        japones = "十" + (i%10 === 0 ? "" : kanjiNumeros[(i%10)-1]);
        hiragana = "じゅう" + (i%10 === 0 ? "" : hiraganaNumeros[(i%10)-1]);
      } else if (i % 10 === 0) {
        japones = kanjiNumeros[Math.floor(i/10)-1] + "十";
        hiragana = hiraganaNumeros[Math.floor(i/10)-1] + "じゅう";
      } else {
        japones = kanjiNumeros[Math.floor(i/10)-1] + "十" + kanjiNumeros[(i%10)-1];
        hiragana = hiraganaNumeros[Math.floor(i/10)-1] + "じゅう" + hiraganaNumeros[(i%10)-1];
      }
      data.push({
        id: i,
        numero: i,
        japones,
        hiragana,
        romaji: i <= 10 ? romajiNumeros[i-1] : `${romajiNumeros[Math.floor(i/10)-1]} juu${i%10 !== 0 ? ' ' + romajiNumeros[(i%10)-1] : ''}`,
        tipo: "básico"
      });
    }
    return Promise.resolve({
      table: "numeros",
      total: data.length,
      data,
    } as T);
  }
  return Promise.resolve({ table, total: 0, data: [] } as T);
}

export async function apiFetch<T>(
  params: Record<string, string | number>
): Promise<T> {
  return apiGet<T>("/", params);
}

export async function apiPost<T>(
  _path: string,
  _body: Record<string, unknown>
): Promise<T> {
  // Simula resposta de sucesso
  return Promise.resolve({ success: true } as T);
}
