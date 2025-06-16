const unitTestingTask = require("../../unitTestingTask");

const fs = require("fs");
const path = require("path");
const languages = fs
  .readdirSync(path.join(__dirname, "../../lang"))
  .filter((file) => path.extname(file) === ".js")
  .map((file) => path.basename(file, ".js"));

const date = new Date("2010-11-15T14:30:00");
const nightDate = new Date("2010-11-15T02:30:00");
const morningDate = new Date("2010-11-15T06:30:00");
const eveningDate = new Date("2010-11-15T20:30:00");

const scenariosForLangs = {
  uk: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "листопад"],
    ["formats month shortly", ["MMM", date], "лист"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "понеділок"],
    ["formats day more short", ["DD", date], "пн"],
    ["formats day shorter", ["D", date], "пн"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats AM/PM", ["A", date], "дня"],
    ["formats am/pm", ["a", date], "дня"],
    ["formats AM/PM at morning", ["A", morningDate], "ранку"],
    ["formats am/pm at morning", ["a", morningDate], "ранку"],
    ["formats AM/PM at evening", ["A", eveningDate], "вечора"],
    ["formats am/pm at evening", ["a", eveningDate], "вечора"],
    ["formats AM/PM at night", ["A", nightDate], "ночі"],
    ["formats am/pm at night", ["a", nightDate], "ночі"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  be: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "лістапад"],
    ["formats month shortly", ["MMM", date], "лис"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "панядзелак"],
    ["formats day more short", ["DD", date], "пн"],
    ["formats day shorter", ["D", date], "пн"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats AM/PM", ["A", date], "дня"],
    ["formats am/pm", ["a", date], "дня"],
    ["formats AM/PM at night", ["A", nightDate], "ночы"],
    ["formats am/pm at night", ["a", nightDate], "ночы"],
    ["formats AM/PM at night", ["A", morningDate], "раніцы"],
    ["formats am/pm at night", ["a", morningDate], "раніцы"],
    ["formats AM/PM at night", ["A", eveningDate], "вечара"],
    ["formats am/pm at night", ["a", eveningDate], "вечара"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  cs: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "prosinec"],
    ["formats month shortly", ["MMM", date], "lis"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "pondělí"],
    ["formats day more short", ["DD", date], "po"],
    ["formats day shorter", ["D", date], "po"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats AM/PM", ["A", date], "odpoledne"],
    ["formats am/pm", ["a", date], "odpoledne"],
    ["formats AM/PM at morning", ["A", morningDate], "dopoledne"],
    ["formats am/pm at morning", ["a", morningDate], "dopoledne"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  kk: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "қараша"],
    ["formats month shortly", ["MMM", date], "қар"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "дүйсенбі"],
    ["formats day more short", ["DD", date], "дс"],
    ["formats day shorter", ["D", date], "дс"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  pl: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "listopad"],
    ["formats month shortly", ["MMM", date], "lis"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "poniedziałek"],
    ["formats day more short", ["DD", date], "pon"],
    ["formats day shorter", ["D", date], "Pn"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats AM/PM", ["A", date], ""],
    ["formats am/pm", ["a", date], ""],
    ["formats AM/PM at morning", ["A", morningDate], "rano"],
    ["formats am/pm at morning", ["a", morningDate], "rano"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  ru: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "ноябрь"],
    ["formats month shortly", ["MMM", date], "ноя"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "понедельник"],
    ["formats day more short", ["DD", date], "пн"],
    ["formats day shorter", ["D", date], "пн"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats AM/PM", ["A", date], "дня"],
    ["formats am/pm", ["a", date], "дня"],
    ["formats AM/PM at morning", ["A", morningDate], "утра"],
    ["formats am/pm at morning", ["a", morningDate], "утра"],
    ["formats AM/PM at evening", ["A", eveningDate], "вечера"],
    ["formats am/pm at evening", ["a", eveningDate], "вечера"],
    ["formats AM/PM at night", ["A", nightDate], "ночи"],
    ["formats am/pm at night", ["a", nightDate], "ночи"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  tr: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "Kasım"],
    ["formats month shortly", ["MMM", date], "Kas"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "Pazartesi"],
    ["formats day more short", ["DD", date], "Pts"],
    ["formats day shorter", ["D", date], "Pt"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
  tt: [
    ["formats year", ["YYYY", date], "2010"],
    ["formats year shortly", ["YY", date], "10"],
    ["formats month", ["MMMM", date], "ноябрь"],
    ["formats month shortly", ["MMM", date], "ноя"],
    ["formats month number", ["MM", date], "11"],
    ["formats month number shortly", ["M", date], "11"],
    ["formats day", ["DDD", date], "дүшәмбе"],
    ["formats day more short", ["DD", date], "дш"],
    ["formats day shorter", ["D", date], "дш"],
    ["formats day of the month", ["dd", date], "15"],
    ["formats day of the month shortly", ["d", date], "15"],
    ["formats hour", ["HH", date], "14"],
    ["formats hour shortly", ["H", date], "14"],
    ["formats hour in 12h format", ["hh", date], "02"],
    ["formats hour in 12h format shortly", ["h", date], "2"],
    ["formats minutes", ["mm", date], "30"],
    ["formats minutes shortly", ["m", date], "30"],
    ["formats seconds", ["ss", date], "00"],
    ["formats seconds shortly", ["s", date], "0"],
    ["formats milliseconds", ["ff", date], "000"],
    ["formats milliseconds shortly", ["f", date], "0"],
    ["formats timezone in ISO8601", ["ZZ", date], "+0100"],
    ["formats timezone in ISO8601 extended", ["Z", date], "+01:00"],
  ],
};

describe("unitTestingTask", () => {
  for (const [lang, scenarios] of Object.entries(scenariosForLangs)) {
    describe(lang, () => {
      beforeEach(() => {
        jest.resetModules();
      });

      for (const [title, args, expected] of scenarios) {
        test(title, () => {
          const unitTestingTask = require("../../unitTestingTask");
          unitTestingTask.lang(lang)
          const result = unitTestingTask(...args);

          expect(result).toBe(expected);
        });
      }
    });
  }
});

describe("unitTestingTask.lang", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("it returns languages.current when no argument", () => {
    unitTestingTask._languages.current = "mocked";
    const lang = unitTestingTask.lang();

    expect(lang).toBe("mocked");
  });

  test("it creates new language", () => {
    const lang = unitTestingTask.lang("new_lang", {});

    expect(lang).toBe("new_lang");
  });

  describe("language based tests", () => {
    beforeEach(() => {
      jest.resetModules();
    });

    for (const lang of languages) {
      test("if returns new language when argument provided", () => {
        const _lang = unitTestingTask.lang(lang);

        expect(_lang).toBe(lang);
      });
    }
  });
});

describe("unitTestingTask.register", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const testDate = new Date("2025-05-15T14:30:00");

  const variants = [
    ["onlyDay", "d", "15"],
    ["customTime", "HH:mm", "14:30"],
  ];

  for (const [name, format, expected] of variants) {
    test(name, () => {
      unitTestingTask.register(name, format);

      const result = unitTestingTask(name, testDate);
      expect(result).toBe(expected);
    });
  }
});

describe("UMD wrapper", () => {
  let originalDefine;

  beforeEach(() => {
    originalDefine = global.define;
  });

  afterEach(() => {
    global.define = originalDefine;
  });

  for (const lang of languages) {
    test("calls define when AMD is available", () => {
      const mockDefine = jest.fn();
      global.define = mockDefine;

      global.define.amd = true;

      require(`../../lang/${lang}`);

      expect(mockDefine).toHaveBeenCalledWith(
        ["unitTestingTask"],
        expect.any(Function)
      );
    });
  }
});