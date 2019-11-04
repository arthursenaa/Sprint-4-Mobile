using System;
using System.Collections.Generic;

namespace Senai.Medico.WebApi.Domains
{
    public partial class Doutor
    {
        public int IdMedico { get; set; }
        public string Nome { get; set; }
        public DateTime DataDeNascimento { get; set; }
        public string Crm { get; set; }
        public string Especialidade { get; set; }
    }
}
