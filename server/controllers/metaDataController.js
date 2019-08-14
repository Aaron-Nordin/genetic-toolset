module.exports = {
  //axios get in GeneLib.js getGenes()
  getGenes: async (req, res) => {
    const db = req.app.get("db");
    const genes = await db.get_genes(req.params.userId);
    let genesNew = [];
    genes.forEach(g => {
      const {
        gene_id: geneId,
        user_id: userId,
        gene_name: geneName,
        gene_desc: geneDesc,
        dna_seq: dnaSeq,
        rna_seq: rnaSeq,
        amino_acid_seq: aaSeq
      } = g;
      genesNew = [
        ...genesNew,
        { geneId, userId, geneName, geneDesc, dnaSeq, rnaSeq, aaSeq }
      ];
    });
    res.status(200).send(genesNew);
  }
};
