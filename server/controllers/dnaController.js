module.exports = {
  //axios.post in GeneLibSlidingPane.js
  createDNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      console.log(req.body);
      let {
        userId: user_id,
        name: gene_name,
        desc: gene_desc,
        dna: dna_seq,
        rna: rna_seq
      } = req.body;
      if (!dna_seq) {
        let dna_seq = "";
      }
      if (!rna_seq) {
        let rna_seq = "";
      }
      console.log(dna_seq, rna_seq);
      let newDNAId = "";
      let newRNAId = "";
      if (dna_seq) {
        const newDNA = await db.create_dna({ user_id, dna_seq });
        console.log(newDNA);
        newDNAId = newDNA.dna_id;
      }
      if (rna_seq) {
        const newRNA = await db.create_rna({ user_id, rna_seq });
        console.log(newRNA);
        newRNAId = newRNA.rna_id;
      }
      const newGene = await db.create_gene({
        gene_name,
        gene_desc,
        user_id,
        dna_id: newDNAId,
        rna_id: newRNAId
      });
      res(200).send(newGene);
    } catch {
      res.sendStatus(500);
    }
  }
};
