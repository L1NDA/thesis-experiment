import React, { Component }  from 'react';
import './style.css';


class Caste extends Component {


  render() {

    return (
      <div className="trial-text">
      <i>The following is an excerpt from The Economics of Caste and of the Rat Race by
      George A. Akerlof. Please read through the passage to the best of your ability.
      Being able to completely understand the math is less important than grasping the intuition
      behind the thought. Note that the section is longer than the viewport; please scroll for the entire content.</i>
      <br/>
      <br/>

      <b>Formal Model of Caste Equilibrium</b>
      <br/>
      <br/>
      This subsection presents a formal model of caste equilibrium. Caste equilibrium is
      defined as a state of the economy in which caste customs are obeyed, yet no single
      individual, by behaving differently, can make himself better off. The first concern is, of
      course, to describe this equilibrium. However, since there are also coalitions of individuals
      who by acting together can make themselves better off than in equilibrium, it is also
      of interest to know the relative ease or difficulty of forming such a coalition. For this
      purpose we also look at the size and nature of the smallest equilibrium-breaking
      coalition.
      <br/>
      <br/>
      Four sets of assumptions describe the economy; those describing technology, market
      structures, tastes, and the social system. The assumptions describing the social system are
      laid out in parallel with the earlier description of marriage in India. In general this
      model is extremely simple, subject to one complication. By its very nature the caste
      system involves trade and the division of labor. If outcastes could set up their own
      economy independent of caste members, the caste system would fall apart. Therefore,
      three assumptions are inserted that lead individuals to trade with one another; laborers
      can produce only one product; firms produce only one product; and tastes are such that
      persons will wish to purchase more than one good.
      <br/>
      <br/>
      <i>Technology</i> <br/>
      T1. There are three types of jobs: skilled jobs, unskilled jobs, and
      scavenging jobs. (Subscripts <i>sk</i>, <i>u</i>, and <i>sc</i> refer to skilled, unskilled and scavenging,
      respectively.)
      <br/>
      <br/>
      T2. There are n different products, labeled <i>i</i> = 1, . . . :, <i>n</i>.
      <br/>
      <br/>
      T3. The production of each product depends upon the quantity of labor employed
      and the jobs performed by the labor. Let θ<sub>sk</sub>, θ<sub>u</sub>,
      and θ<sub>sc</sub> denote the output of one unit of
      labor in producing any product in a skilled job, unskilled job, or scavenging job,
      respectively. The production function of good <i>i</i> is then <br/>

      <br/>
      <center>
      q<sub>i</sub> = <div className="t-2-sum-1">&sum;</div> θ<sub>j</sub>n<sub>ij</sub>, <br/>
      </center>

      where
      <br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;j = sk, u, sc, i = 1, . . ., n <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;q<sub>i</sub> = output of product i, and <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;n<sub>ij</sub> = quantity of labor employed in job type j in production of good i.
      <br/>
      <br/>
      Of course, θ<sub>sc</sub> &lt; θ<sub>u</sub> &lt; θ<sub>sk</sub>.
      <br/>
      <br/>
      T4. Because of economies due to specialization workers can work on the production
      of only one product.
      <br/>
      <br/>
      <i>Market Structures.</i><br/>
      All firms are competitive profit maximizers. These firms can produce
      only one product. They hire labor and sell output on the market. A firm is willing to bid
      for labor the expected marginal value product of that labor.
      <br/>
      <br/>
      <i>Tastes.</i><br/>
      All persons have the same utility function U, which is independent of the caste
      code.
      <br/>
      <br/>
      <center>
      U = <div className="sum-ender">&sum;</div>min(x<sub>i</sub>, α),<br/>
      </center>
      <br/>
      <br/>
      <i>Social Structure.</i><br/>
      S1. By birth there are just two castes divided into a dominant caste
      D and a nondominant caste N. Labor of both castes D and N can be outcasted.
      Outcastes, if any, form a third group.
      <br/>
      <br/>
      S2. The caste code dictates that D labor may work in only skilled jobs; N labor may
      work in only unskilled jobs; and outcaste labor may only hold scavenging jobs. The
      caste code also says that all persons who purchase from firms not using labor according
      to the caste code will themselves be outcasted.
      <br/>
      <br/>
      S3. Persons predict that breakers of the caste code will be outcasted and receive the
      wages bid for outcaste labor.
      <br/>
      <br/>

      <i>Caste Equilibrium.</i><br/>
      Let the economy be described as above. Let w<sub>k</sub>, k = D, N denote
      the wage of caste k. Let p<sub>i</sub> denote the price of good i produced by firms that use labor
      according to the caste code. Let good 1 be the numeraire good, with price equal to 1.
      Assume parameter values
      <br/>
      <br/>
      <center>
      α &lt; (θ<sub>u</sub>, θ<sub>sc</sub>) / (1 - θ<sub>sc</sub>/θ<sub>sk</sub>)<br/>
      </center>
      and <br/>
      <center>
      n &gt; θ<sub>sk</sub> / α.
      </center>
      <br/>
      The following describes an equilibrium with fulfilled expectations:
      <br/>
      <br/>
      1. w<sub>D</sub> = θ<sub>sk</sub>, w<sub>N</sub> = θ<sub>u</sub>.
      <br/>
      2. The price of all goods produced by firms using labor according to caste code is 1.
      <br/>
      3. There are no outcastes. N labor works at unskilled jobs. D labor works at skilled
      jobs.
      <br/>
      4. Utility of D labor is θ<sub>sk</sub>; utility of N labor is θ<sub>u</sub>.
      <br/>
      5. The highest wage bid for outcaste labor is θ<sub>sc</sub>.
      <br/>
      <br/>
      A coalition of k* firms, producing k* different products and using outcaste labor in
      skilled jobs, can break this equilibrium if
      <br/>
      <br/>
      <center>
      k* &gt; (θ<sub>u</sub>, θ<sub>sc</sub>) / α(1 - θ<sub>sc</sub> / θ<sub>sk</sub>).
      </center>
      <br/>
      <br/>
      <i>Proof. </i>
      It is obvious that the described equilibrium is feasible. We need show only that
      no new firm can make zero or positive profits and bid a higher wage either for N labor
      or for outcaste labor.
      <br/>
      <br/>
      <i>N Labor. </i>
      Suppose that a new firm bids a higher wage for N labor than θ<sub>u</sub>. It must use
      some of this labor in skilled jobs. In this case its profits per laborer will not exceed
      <br/>
      <br/>
      <center>
      pθ<sub>sk</sub> - θ<sub>u</sub>,
      </center>
      <br/>

      where p is the price received for its product. If profits are nonnegative,

      <br/>
      <center>
      p ≥ θ<sub>u</sub> / θ<sub>sk</sub>.
      </center>
      <br/>

      But at a price as great as θ<sub>u</sub> = θ<sub>sk</sub> this firm will have no customers. Consider a prospective
      customer. This customer will be outcasted because N labor is used in skilled jobs.
      Therefore, his expected wage is θ<sub>sc</sub>. He will maximize expected utility by purchasing a
      units at a price p and (θ<sub>sc</sub> - αp) units of other goods from other firms that use labor
      according to the caste code. <br/>
      <br/>
      His total utility will therefore be
      <br/>
      <br/>
      <center>
      θ<sub>sc</sub> - αp + α ≤ θ<sub>sc</sub> - αθ<sub>u</sub>/θ<sub>sk</sub> + α.
      </center>
      <br/>

      But by (1) and (3) the right-hand side of (5) is less than θ<sub>u</sub>.
      Since the customer of this firm receives utility at least as large as θ<sub>u</sub> if he does not
      purchase from the caste-breaking firm, the demand for the firm’s products will be zero.
      <br/>
      <br/>
      <i>Outcaste Labor. </i>
      <br/>
      No firm can bid a wage higher than θ<sub>sc</sub> for outcaste labor and receive a
      profit if this bid is accepted. For a firm to pay a higher wage than θ<sub>sc</sub>, it must employ
      outcaste labor in skilled or unskilled jobs. Its profits per laborer will not exceed
      <br/>
      <br/>
      <center>
      pθ<sub>sk</sub> - θ<sub>sc</sub>.
      </center>
      <br/>
      If profits are nonnegative,

      <br/>
      <center>
      p ≥ θ<sub>sc</sub>/θ<sub>sk</sub>.
      </center>
      <br/>

      But at a price as great as θ<sub>sc</sub> = θ<sub>sk</sub> the firm will have no customers: any prospective
      customer will be outcasted and expect to receive a wage θ<sub>sc</sub>. Consider this customer. He
      will buy α units from this firm at a price p and will purchase (θ<sub>sc</sub> - αp) units of other
      goods from other firms. Therefore, his utility will be no greater than
      <br/>
      <br/>
      <center>
      θ<sub>sc</sub> - αθ<sub>sc</sub>/θ<sub>sk</sub> + α.
      </center>
      <br/>

      But since (6) is less than θ<sub>u</sub> by (3), this firm will have no customers. Hence the maximum
      bid for outcaste labor will be θ<sub>sc</sub>.


      </div>
    );
  }
}

export default Caste;
