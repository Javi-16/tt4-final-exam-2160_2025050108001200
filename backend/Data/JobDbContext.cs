using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Collections.Generic;

namespace backend.Data
{
    public class JobDbContext : DbContext
    {
        public JobDbContext(DbContextOptions<JobDbContext> options) : base(options) { }

        public DbSet<Application> Applications { get; set; }
    }
}
