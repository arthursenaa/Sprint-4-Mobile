using Senai.Medico.WebApi.Domains;
using Senai.Medico.WebApi.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Medico.WebApi.Repositories
{
    public class MedicoRepository : IMedico
    {
        MedicoContext ctx = new MedicoContext();

        public List<Doutor> Listar()
        {
            return (ctx.Doutor.ToList());
        }

    }
}
