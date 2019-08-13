module.exports = {
  //axios get in GeneLib.js getGenes()
  getGenes: async (req, res) => {
    const db = req.app.get("db");
    console.log(req.params);
    const genes = await db.get_genes(req.params.userId);
    return res.status(200).send(() => {
      return {
        userId: genes.user_id,
        geneName: genes.gene_name,
        geneDesc: genes.gene_desc,
        dnaSeq: genes.dna_seq,
        rnaSeq: genes.rna_seq,
        aaSeq: genes.amino_acid_seq
      };
    });
  }
};
