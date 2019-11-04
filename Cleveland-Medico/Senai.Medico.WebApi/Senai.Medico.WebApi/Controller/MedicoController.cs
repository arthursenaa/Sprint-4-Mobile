using Microsoft.AspNetCore.Mvc;
using Senai.Medico.WebApi.Interface;
using Senai.Medico.WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Medico.WebApi.Controller

{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]

    public class MedicoController : ControllerBase
    {

        MedicoRepository MedicoRepository = new MedicoRepository();
 

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(MedicoRepository.Listar());
        }
    }
}

  