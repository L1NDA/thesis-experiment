import React, { Component }  from 'react';
import './style.css';


class Lemons extends Component {


  render() {

    return (
      <div className="trial-text">
      <i>The following is an excerpt from The Market for ‘Lemons’ by
      George A. Akerlof. Please read through the passage to the best of your ability.
      Being able to completely understand the math is less important than grasping the intuition
      behind the thought. Note that the section is longer than the viewport; please scroll for the entire content.</i>
      <br/>
      <br/>

      <b>Assymetrical Information</b>
      <br/>
      <br/>
      It has been seen that the good cars may be driven out of the
      market by the lemons. But in a more continuous case with different
      grades of goods, even worse pathologies can exist. For it is quite
      possible to have the bad driving out the not-so-bad driving out the
      medium driving out the not-so-good driving out the good in such
      a sequence of events that no market exists at all.
      <br/>
      <br/>
      One can assume that the demand for used automobiles depends
      most strongly upon two variables - the price of the automobile p
      and the average quality of used cars traded, μ, or Q<sup>d</sup> = D(p, μ).
      Both the supply of used cars and also the average quality μ will depend
      upon the price, or μ = μ(p) and S = S(p). And in equilibrium the
      supply must equal the demand for the given average quality, or S(p) = D (p, μ(p)).
      As the price falls, normally the quality will
      also fall. And it is quite possible that no goods will be traded at
      any price level.
      <br/>
      <br/>
      Such an example can be derived from utility theory. Assume
      that there are just two groups of traders: groups one and two. Give
      group one a utility function <br/>

      <br/>
      <center>
      U<sub>1</sub> = M + <div className="sum-ender">&sum;</div>x<sub>i</sub> <br/>
      </center>
      <br/>

      where M is the consumption of goods other than automobiles, x<sub>i</sub> is
      the quality of the ith automobile, and n is the number of automobiles.
      Similarly, let <br/>

      <br/>
      <center>
      U<sub>2</sub> = M + <div className="sum-ender">&sum;</div>3/2 x<sub>i</sub> <br/>
      </center>
      <br/>

      where M, x<sub>i</sub>, and n are defined as before.
      <br/>
      <br/>
      Three comments should be made about these utility functions: (1) without linear utility (say with logarithmic utility) one
      gets needlessly mired in algebraic complication. (2) The use of linear utility allows a focus on the effects
      of asymmetry of information; with a concave utility function we would have to deal jointly
      with the usual risk-variance effects of uncertainty and the special
      effects we wish to discuss here. (3) U<sub>1</sub> and U<sub>2</sub> have the odd characteristic that the addition of a second car, or indeed a kth car,
      adds the same amount of utility as the first. Again realism is sacrificed to avoid a diversion from the proper focus.
      <br/>
      <br/>
      To continue, it is assumed (1) that both type one traders and
      type two traders are von Neumann-Morgenstern maximizers of
      expected utility; (2) that group one has N cars with uniformly
      distributed quality x, 0 ≤ x ≤ 2, and group two has no cars; (3) that
      the price of "other goods" M is unity.
      <br/>
      <br/>
      Denote the income (including that derived from the sale of
      automobiles) of all type one traders as Y<sub>1</sub> and the income of all
      type two traders as Y<sub>2</sub>. The demand for used cars will be the sum
      of the demands by both groups. When one ignores indivisibilities,
      the demand for automobiles by type one traders will be <br/>

      <center>
      D<sub>1</sub> = Y<sub>1</sub> /p
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      μ/p &gt; 1<br/>
      D<sub>1</sub> = 0
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      μ/p &lt; 1
      </center>

      And the supply of cars offered by type one traders is <br/>

      <br/>
      <center>
      (1) S<sub>2</sub> = pN/2
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      p ≤ 2
      </center>
      <br/>

      with average quality

      <br/>
      <center>
      (2) μ = p/2
      </center>
      <br/>

      (To derive (1) and (2), the uniform distribution of automobile
      quality is used.)<br/>
      Similarly the demand of type two traders is <br/>

      <br/>
      <center>
      D<sub>2</sub> = Y<sub>2</sub> /p
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      3μ/2 &gt; p<br/>
      D<sub>2</sub> = 0
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      3μ/2 &lt; p
      </center>
      <br/> and <br/>

      <br/>
      <center>
      S<sub>2</sub> = 0
      </center>
      <br/>

      Thus total demand D(p, μ) is <br/>

      <br/>
      <center>
      D(p, μ) = (Y<sub>2</sub>+Y<sub>1</sub>) /p
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if p &lt; μ<br/>

      D(p, μ) = Y<sub>2</sub> /p
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if μ &lt; p &lt; 3μ/2<br/>

      D(p, μ) = 0
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if p &gt; 3μ/2<br/>
      </center>
      <br/>

      However, with price p, average quality is p/2 and therefore at no
      price will any trade take place at all: in spite of the fact that at
      any given price between 0 and 3 there are traders of type one who
      are willing to sell their automobiles at a price which traders of type
      two are willing to pay.
      <br/>
      <br/>

      <b>Symmetric Information</b>
      <br/>
      <br/>

      The foregoing is contrasted with the case of symmetric information.
      Suppose that the quality of all cars is uniformly distributed,
      0 ≤ x ≤ 2. Then the demand curves and supply curves can be written
      as follows: <br/>

      <br/>
      Supply:

      <br/>
      <center>
      S(p) = N
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      p &gt; 1<br/>
      S(p) = 0
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      p &lt; 1
      </center>
      <br/>

      And the demand curves are
      <br/>

      <br/>
      <center>
      D(p) = (Y<sub>2</sub>+Y<sub>1</sub>) /p
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      p &lt; 1<br/>

      D(p) = (Y<sub>2</sub> /p)
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      1 &lt; p &lt; 3/2<br/>

      D(p) = 0
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      p &gt; 3/2<br/>
      </center>
      <br/>

      In equilibrium
      <br/>

      <br/>
      <center>
      (3) p = 1
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if Y<sub>2</sub> &lt; 1 <br/>

      (4) p = Y<sub>2</sub> /N
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if 2Y<sub>2</sub> /3 &lt; N &lt; Y<sub>2</sub><br/>

      (5) p = 3/2
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if N &lt; 2Y<sub>2</sub> /3<br/>
      </center>
      <br/>

      If N &lt; Y<sub>2</sub> there is a gain in utility over the case of asymmetrical
      information of N/2. (If N &lt; Y<sub>2</sub>, in which case the income of type
      two traders is insufficient to buy all N automobiles, there is a gain
      in utility of Y<sub>2</sub> /2 units.)
      <br/>
      <br/>

      Finally, it should be mentioned that in this example, if traders
      of groups one and two have the same probabilistic estimates about
      the quality of individual automobiles - though these estimates may
      vary from automobile to automobile - (3), (4), and (5) will still
      describe equilibrium with one slight change: p will then represent
      the expected price of one quality unit.

      </div>
    );
  }
}

export default Lemons;
