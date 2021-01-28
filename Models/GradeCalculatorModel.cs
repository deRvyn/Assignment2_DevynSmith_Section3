using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2_DevynSmith_Section3.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Group { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Exams { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Intex { get; set; }
    }
}
