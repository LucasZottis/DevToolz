using Microsoft.AspNetCore.Components;

namespace DevTools.Components;

public partial class CnpjContent : ComponentBase
{
    private int resto = 0;
    private List<Calculo> calculoPasso1 = new List<Calculo>
    {
        new Calculo { Multipl1 = 1, Multipl2 = 5, Resultado = 1 },
        new Calculo { Multipl1 = 1, Multipl2 = 4, Resultado = 1 },
        new Calculo { Multipl1 = 2, Multipl2 = 3, Resultado = 2 },
        new Calculo { Multipl1 = 2, Multipl2 = 2, Resultado = 2 },
        new Calculo { Multipl1 = 2, Multipl2 = 9, Resultado = 2 },
        new Calculo { Multipl1 = 3, Multipl2 = 8, Resultado = 3 },
        new Calculo { Multipl1 = 3, Multipl2 = 7, Resultado = 3 },
        new Calculo { Multipl1 = 3, Multipl2 = 6, Resultado = 3 },
        new Calculo { Multipl1 = 0, Multipl2 = 5, Resultado = 0 },
        new Calculo { Multipl1 = 0, Multipl2 = 4, Resultado = 0 },
        new Calculo { Multipl1 = 0, Multipl2 = 3, Resultado = 0 },
        new Calculo { Multipl1 = 1, Multipl2 = 2, Resultado = 2 }
    };

    List<Calculo> calculoPasso2 = new List<Calculo>
    {
        new Calculo { Multipl1 = 1, Multipl2 = 6, Resultado = 1 },
        new Calculo { Multipl1 = 1, Multipl2 = 5, Resultado = 1 },
        new Calculo { Multipl1 = 2, Multipl2 = 4, Resultado = 2 },
        new Calculo { Multipl1 = 2, Multipl2 = 3, Resultado = 2 },
        new Calculo { Multipl1 = 2, Multipl2 = 2, Resultado = 2 },
        new Calculo { Multipl1 = 3, Multipl2 = 9, Resultado = 3 },
        new Calculo { Multipl1 = 3, Multipl2 = 8, Resultado = 3 },
        new Calculo { Multipl1 = 3, Multipl2 = 7, Resultado = 3 },
        new Calculo { Multipl1 = 0, Multipl2 = 6, Resultado = 0 },
        new Calculo { Multipl1 = 0, Multipl2 = 5, Resultado = 0 },
        new Calculo { Multipl1 = 0, Multipl2 = 4, Resultado = 0 },
        new Calculo { Multipl1 = 1, Multipl2 = 3, Resultado = 3 },
        new Calculo { Multipl1 = 8, Multipl2 = 2, Resultado = 16 }
    };

    List<int> calculoPasso1Resultado = new List<int> { 1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 2 };
    List<int> calculoPasso2Resultado = new List<int> { 1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 3, 16 };

    public CnpjContent()
    {
        int resto = calculoPasso1Resultado.Sum() % 11;
    }
}

public class Calculo
{
    public int Multipl1 { get; set; }
    public int Multipl2 { get; set; }
    public int Resultado { get; set; }
}