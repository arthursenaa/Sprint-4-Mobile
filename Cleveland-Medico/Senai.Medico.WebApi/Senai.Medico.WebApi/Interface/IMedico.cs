using Senai.Medico.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Medico.WebApi.Interface
{
    interface IMedico
    {
        List<Doutor> Listar();
    }
}
