//2. One organization have one depratment as HR department and two child department as
//Humanity Department and Logistic Department under Hr department. We have to
//calulate tax as HRA is different for different departments but it should implement main
//TaxCalulator interface. Which design pattern will be preferred for this problem. Provide
//suitable code snippet for this.
Ans: Behavioral Pattern will be preferred for this problem.
public interface TaxCalculator {
public abstract void execute();
}
public class Humanity implements TaxCalculator {
private int basic_salary;
public Order(int basic_salary) {
this.basic_salary = basic_salary;
}
@Override
public void execute() {
HRA=(10/100)*basicsalary;
}
}
public class Logistic implements TaxCalculator {
private int basic_salary;
public Order(int basic_salary) {
this.basic_salary = basic_salary;
}
@Override
public void execute() {
HRA=(10/100)*basicsalary;
}
}

public class Department {
public static void main(String[] args) {
basic_salary basic_salary = new basic_salary();
Humanity humanity = new Humanity(basic_salary);
Logistic logistic = new Logistic(basic_salary);
Humanity.execute();
humanity = new humanity(basic_salary);
logistic = new Logistic(basic_salary);
Logistic.execute();
}
}