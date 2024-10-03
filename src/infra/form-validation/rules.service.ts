class RulesService {
  public email(value: string) {
    if (!value) return true;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(value) ? true : 'Email inválido';
  }

  public required(value: string | Array<any> | Object) {
    if (value === null || value === undefined || value === '') {
      return 'Campo obrigatório.';
    }
    if (value instanceof Array && value.length === 0) {
      return 'Campo obrigatório.';
    }
    if (
      value instanceof Object &&
      Object.values(value).every((prop) => prop === '')
    ) {
      return 'Campo obrigatório.';
    }
    return true;
  }

  public isPdfFile(value: File[]) {
    if (!value || !value.length) {
      return true;
    }
    return value[0].type === 'application/pdf'
      ? true
      : 'O documento selecionado não é do tipo PDF';
  }

  public isURL(value: string) {
    if (!value || !value.length) {
      return true;
    }
    let url;

    try {
      url = new URL(value);
    } catch (_) {
      return 'URL inválida';
    }

    return url.protocol === 'http:' || url.protocol === 'https:'
      ? true
      : 'URL inválida';
  }

  public minLengthPhone(value: string) {
    if (!value) {
      return true;
    }
    return value.length >= 15 || 'Telefone incompleto';
  }

  public minLengthResidencialPhone(value: string) {
    if (!value) {
      return true;
    }
    return value.length >= 14 || 'Telefone incompleto';
  }

  public onlyNumber(value: string) {
    if (!value) {
      return true;
    }
    return !Number.isNaN(Number(value))
      ? true
      : 'Esse campo suporta apenas número';
  }

  public onlyText(value: string) {
    if (!value) {
      return true;
    }
    return Number.isNaN(Number(value))
      ? true
      : 'Esse campo suporta apenas texto';
  }

  public greaterThanOrEqualZero(value: string) {
    if (!value) {
      return true;
    }
    return Number(value) >= 0 ? true : 'O valor deve ser maior ou igual a 0';
  }

  public greaterThanZero(value: string) {
    const valueWithoutComma = value.replace(',', '.');
    if (!valueWithoutComma) {
      return true;
    }
    return parseFloat(valueWithoutComma) > 0
      ? true
      : 'O valor deve ser maior do que 0';
  }

  public validCep(value: string) {
    if (!value) {
      return true;
    }
    const data = value.replace('-', '');
    return !Number.isNaN(Number(data)) ? true : 'Formato de CEP inválido';
  }
}

export default new RulesService();
