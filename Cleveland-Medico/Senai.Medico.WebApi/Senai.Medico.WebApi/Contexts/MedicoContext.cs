using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai.Medico.WebApi.Domains
{
    public partial class MedicoContext : DbContext
    {
        public MedicoContext()
        {
        }

        public MedicoContext(DbContextOptions<MedicoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Doutor> Doutor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress;Initial Catalog=T_Medico;User Id=sa;Pwd=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Doutor>(entity =>
            {
                entity.HasKey(e => e.IdMedico);

                entity.HasIndex(e => e.Crm)
                    .HasName("UQ__Doutor__D836F7D1B14CCD1B")
                    .IsUnique();

                entity.Property(e => e.Crm)
                    .IsRequired()
                    .HasColumnName("crm")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DataDeNascimento).HasColumnType("date");

                entity.Property(e => e.Especialidade)
                    .IsRequired()
                    .HasColumnName("especialidade")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
